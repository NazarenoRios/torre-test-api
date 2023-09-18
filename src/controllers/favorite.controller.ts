import { Request, Response } from "express";
import Favorite from "../models/Favorites";

import { userRequest } from "../interfaces/user.interface";

import { handleHttp } from "../utils/error.handle";

const get_favorites = async (req: userRequest, res: Response) => {
  try {
    const userId = req.user.id;
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 10;

    const skip = (page - 1) * pageSize;

    const favorites = await Favorite.find({ user: userId })
      .skip(skip)
      .limit(pageSize);

    res.status(200).json(favorites);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al obtener los favoritos del usuario" });
  }
};

const add_favorite = async (req: userRequest, res: Response) => {
  try {
    const userId = req.user.id;

    const { ggId, name, picture, professionalHeadline, username, verified } =
      req.body;

    const newFavorite = new Favorite({
      user: userId,
      ggId,
      name,
      picture,
      professionalHeadline,
      username,
      verified,
    });

    await newFavorite.save();

    res.status(201).json({
      message: "Elemento agregado a favoritos exitosamente",
      _id: newFavorite._id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al agregar el elemento a favoritos" });
  }
};

const remove_favorite = async (req: userRequest, res: Response) => {
  try {
    const userId = req.user.id;
    const favoriteId = req.params.favoriteId;

    const favorite: any = await Favorite.deleteOne({
      _id: favoriteId,
      user: userId,
    }).exec();

    if (!favorite) {
      return res.status(404).json({ error: "El favorito no fue encontrado" });
    }

    res.status(200).json({ message: "Favorito eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el favorito" });
  }
};

export { add_favorite, remove_favorite, get_favorites };

import { useEffect, useState } from "react";
import { Game } from "../model/game";
import GameResponse from "../model/gameResponse";
import apiClient from "../services/api-client";
import { AxiosError, CanceledError } from "axios";
import exp from "constants";
import useData from "./useData";

const useGames = () => useData<Game>('/games')

export default useGames;
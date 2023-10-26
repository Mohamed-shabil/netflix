import { API_Key } from "./contants"
export const original =`discover/tv?api_key=${API_Key}&with_network=213`
export const action =`discover/movie?api_key=${API_Key}&with_genres=28`
export const Animation =`discover/movie?api_key=${API_Key}&with_genres=16`
export const Drama = `discover/movie?api_key=${API_Key}&with_genres=18`
export const trending=`trending/all/week?api_key=${API_Key}`
export const tv =`trending/tv/day?api_key=${API_Key}&language=hi-IN`
export const Popular_Movies =`discover/movie?api_key=${API_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
export const Popular_shows=`/tv/popular?api_key=${API_Key}&language=en-US&page=1`
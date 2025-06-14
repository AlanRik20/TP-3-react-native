import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'

const MovieCard = ({id,poster_path, title, vote_average, release_date}: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
        <TouchableOpacity className='w-[30%]'>
            <Image
                source={{
                    uri: poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : 'https://placehold.co/600x400/1a1a1a/ffffff.png'
                }}
                className="w-full h-52 rounded-lg"
                resizeMode='cover'
            />  
            <Text className='text-sm font-bold text-white mt-2'>{title}</Text>
            <Text className='text-xs text-gray-400'>{release_date}</Text>
            <Text className='text-xs text-yellow-400 mt-1'>Rating: {vote_average.toFixed(1)}</Text>
        </TouchableOpacity>
    </Link>
  )
}

export default MovieCard
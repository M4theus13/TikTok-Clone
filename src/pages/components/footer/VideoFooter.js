import React from 'react'
import './videoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className='videoFooter'>
      <div className='videoFooter-text'>
        <h3>@Matheus13</h3>
        <p>Descrição do Video</p>
        <div className='videoFooter-music'>
          <MusicNoteIcon className='videoFooter-icon' />
          <div className='videoFooterMusic-text'>
            <p>Titulo da música</p>
          </div>
        </div>
      </div>
      <img className='videoFooter-record' alt='Imagem de vinil' src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z'/>
    </div>
  )
}

export default VideoFooter
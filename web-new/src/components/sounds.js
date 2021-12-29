// pacman
import pacmanSound from '../sounds/sound1.wav'
import blinkySound from '../sounds/sound2.wav'
import pinkySound from '../sounds/sound3.wav'
import inkySound from '../sounds/sound4.wav'
import clydeSound from '../sounds/sound5.wav'

// super mario bros
import smbOneUpSound from '../sounds/sound6.wav'
import smbCoinSound from '../sounds/sound7.wav'
import smbJumpSound from '../sounds/sound8.wav'
import smbMarioDieSound from '../sounds/sound9.wav'
import smbPowerUpSound from '../sounds/sound10.wav'
import smbVineSound from '../sounds/sound11.wav'

// right
import zeldaSecretSound from '../sounds/sound12.wav'
import sonicSound from '../sounds/sound13.mp3'
import pokemonSound from '../sounds/sound14.mp3'
import marioKartSound from '../sounds/sound15.mp3'
import angryBirdsSound from '../sounds/sound16.m4a'
import donkeyKongSound from '../sounds/sound17.mp3'

export const pacman = {
  target: {
    left: 0.895833333,
    right: 0.982638889,
    top: 0.785555556,
    bottom: 0.943333333,
  },
  sound: pacmanSound,
}

export const blinky = {
  target: {
    left: 0.069444444,
    right: 0.113888889,
    top: 0.515555556,
    bottom: 0.593333333,
  },
  sound: blinkySound,
}

export const inky = {
  target: {
    left: 0.015277778,
    right: 0.0625,
    top: 0.757777778,
    bottom: 0.84,
  },
  sound: inkySound,
}

export const pinky = {
  target: {
    left: 0.069444444,
    right: 0.113888889,
    top: 0.615555556,
    bottom: 0.691111111,
  },
  sound: pinkySound,
}

export const clyde = {
  target: {
    left: 0.069444444,
    right: 0.113888889,
    top: 0.908888889,
    bottom: 0.984444444,
  },
  sound: clydeSound,
}

export const smbOneUp = {
  target: {
    left: 0.31,
    right: 0.336111111,
    top: 0.5,
    bottom: 0.55,
  },
  sound: smbOneUpSound,
}

export const smbCoin = {
  target: {
    left: 0.347222222,
    right: 0.380555556,
    top: 0.5,
    bottom: 0.55,
  },
  sound: smbCoinSound,
}

export const smbVine = {
  target: {
    left: 0.394444444,
    right: 0.429166667,
    top: 0.5,
    bottom: 0.55,
  },
  sound: smbVineSound,
}

export const smbJump = {
  target: {
    left: 0.31,
    right: 0.336111111,
    top: 0.56,
    bottom: 0.61111111,
  },
  sound: smbJumpSound,
}

export const smbMarioDie = {
  target: {
    left: 0.347222222,
    right: 0.380555556,
    top: 0.56,
    bottom: 0.61111111,
  },
  sound: smbMarioDieSound,
}

export const smbPowerUp = {
  target: {
    left: 0.394444444,
    right: 0.429166667,
    top: 0.56,
    bottom: 0.61111111,
  },
  sound: smbPowerUpSound,
}

// right
export const zeldaSecret = {
  target: {
    left: 0.31 + 0.36,
    right: 0.336111111 + 0.36,
    top: 0.5,
    bottom: 0.55,
  },
  sound: zeldaSecretSound,
}

export const sonic = {
  target: {
    left: 0.698611111,
    right: 0.736111111,
    top: 0.5,
    bottom: 0.55,
  },
  sound: sonicSound,
}

export const pokemon = {
  target: {
    left: 0.394444444 + 0.36,
    right: 0.429166667 + 0.36,
    top: 0.5,
    bottom: 0.55,
  },
  sound: pokemonSound,
}

export const marioKart = {
  target: {
    left: 0.31 + 0.36,
    right: 0.336111111 + 0.36,
    top: 0.56,
    bottom: 0.61111111,
  },
  sound: marioKartSound,
}

export const angryBirds = {
  target: {
    left: 0.347222222 + 0.36,
    right: 0.380555556 + 0.36,
    top: 0.56,
    bottom: 0.61111111,
  },
  sound: angryBirdsSound,
}

export const donkeyKong = {
  target: {
    left: 0.754166667,
    right: 0.788888889,
    top: 0.56,
    bottom: 0.61111111,
  },
  sound: donkeyKongSound,
}

export const playsoundIfClicked = ({ event, ref, target, playSound }) => {
  const { clientX, clientY } = event

  const rect = ref.current.getBoundingClientRect()
  //   console.log('checking', {
  //     clientX,
  //     clientY,
  //     rect,
  //     target,
  //     left: target.left * rect.width + rect.left,
  //     right: target.right * rect.width + rect.left,
  //     top: target.top * rect.height + rect.top,
  //     bottom: target.bottom * rect.height + rect.top,
  //   })
  if (
    clientX >= target.left * rect.width + rect.left &&
    clientX <= target.right * rect.width + rect.left &&
    clientY >= target.top * rect.height + rect.top &&
    clientY <= target.bottom * rect.height + rect.top
  ) {
    console.log('playing sound')
    playSound()
  }
}

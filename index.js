function ifWin(obj){
   return obj.result === 'W'
}

function superbowlWin (array) {
    const win = array.find(ifWin)
    if (win != undefined) {
        return win.year
    } else {
        return undefined
    }
}

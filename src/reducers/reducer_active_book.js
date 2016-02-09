export default function (state = null, action){
 console.dir(arguments)
  switch (action.type) {
    case 'BOOK_SELECTED':

      return action.payload;


    default:

      return state

  }



}

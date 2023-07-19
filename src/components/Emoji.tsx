import meh from "../assets/meh.webp"
import thumbsUp from "../assets/thumbs-up.webp"
import bullsEye from "../assets/bulls-eye.webp"
import { Image, ImageProps } from "@chakra-ui/react"
interface Props {
    rating:number
}

export const Emoji = ({rating} : Props) => {
    if (rating < 3) return null
    const ratingMap: {[key: number]: ImageProps} = {
        3: {src:meh,alt:"meh",boxSize:'30px'},
        4: {src:thumbsUp,alt:"recommended",boxSize:"30px"},
        5: {src:bullsEye,alt:"exceptional",boxSize:'40px'}
    }
  return (
    <Image {...ratingMap[rating]} marginTop={1}/>
  )
}

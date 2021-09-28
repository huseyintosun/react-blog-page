import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useFetch } from '../function/function';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import { Chip, Stack } from '@mui/material';
import { deleteHandler } from '../function/function'
import { AuthContext } from "../context/AuthContext";
import EmailIcon from '@mui/icons-material/Email';


export default function Details({ updateFormHandler }) {
    const { currentUser } = React.useContext(AuthContext);
    const history = useHistory()
    const { cardList } = useFetch();
    const { id } = useParams()
    const [liked, setLiked] = React.useState(null)

    function filterById(item) {
        if (item?.id === id) {
            return true;
        }
    }
    const arrById = cardList?.filter(filterById)[0];
    // console.log('Filtered Array\n', arrById)
    // Filtered Array
    return (
        <>
            <Typography noWrap align="center" variant="h3" component="h2">
                --------------DETAİL--------------
            </Typography>
            <Card
                height="100%"
                sx={{ maxWidth: "80%", textAlign: "center", justifyContent: "center", m: "10%",mt:0 }}>
                <CardMedia
                    component="img"
                    height="%50"
                    src={arrById?.image}
                    alt={arrById?.title}
                />
                <Typography gutterBottom variant="h4" component="div">
                    {arrById?.title}
                </Typography>
                <CardContent
                    height="%100">
                    {new Date().toLocaleDateString()}
                    <Typography variant="body1">
                        {arrById?.content}
                    </Typography>
                </CardContent>
                <CardActions height="%100" disableSpacing>
                    <IconButton size="small">
                        <EmailIcon />
                        {arrById?.email}
                    </IconButton>
                </CardActions>
                <CardActions height="%100" disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon
                        onClick={()=>setLiked(!liked)}
                        sx={ liked ? {color:"red"} : {color:"inherit"} }
                         />
                    </IconButton>
                    <IconButton aria-label="comment">
                        <ChatBubbleOutlineIcon />
                    </IconButton>
                </CardActions>
                {
                    currentUser?.email === arrById?.email ? 
                <Stack direction="row" spacing={5} justifyContent="center">
                    <Chip
                        sx={{ width: "30%" }}
                        label="Update"
                        color="primary"
                        icon={<UpdateIcon />}
                        onClick={() => {
                            history.push("/new-blog")
                            updateFormHandler(arrById)
                        }
                        }
                    />
                    <Chip
                        sx={{ width: "30%" }}
                        label="Delete"
                        color="error"
                        icon={<DeleteIcon />}
                        onClick={() => {
                            deleteHandler(arrById?.id)
                            history.push("/")
                        }}
                    />
                </Stack> : null
                }
            </Card>
        </>
    );
}
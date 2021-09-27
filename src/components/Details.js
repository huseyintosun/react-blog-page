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
                        <FavoriteIcon />
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
            {/* <Card
                height="100%"
                sx={{ maxWidth: "100%" }}>
                <CardMedia
                    component="img"
                    height="%100"
                    src="https://www.mshowto.org/images/articles/2020/05/1_PY24xlr4TpOkXW04HUoqrQ.jpeg"
                    alt="Postgre SQL"
                />
                <CardContent
                    height="%100">
                    {"today"}
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vero eum animi cupiditate nemo. Dolorem quibusdam dolore debitis eius nisi? Ea quo culpa quos vel sapiente deserunt inventore obcaecati modi ipsum molestias. Tenetur maxime adipisci suscipit cumque fuga aperiam nostrum minima sint, sequi quo explicabo quaerat iure ipsa eos vitae, praesentium recusandae fugit quae sapiente! Necessitatibus nisi vel nostrum magnam, delectus asperiores quidem veritatis est inventore assumenda libero ratione eius eaque earum, ducimus numquam? Eos dolorem maxime repudiandae nesciunt ea. Atque magnam perferendis quos doloremque in sequi doloribus tempora harum officia. Ad quidem suscipit laboriosam dolorum. Incidunt saepe consectetur eaque corporis, pariatur quam. Quisquam vitae autem cum accusantium beatae voluptate cupiditate ab nemo molestiae, incidunt quasi labore itaque dolor modi voluptatem tempora temporibus, ratione atque reiciendis voluptates officiis explicabo a? Vel fugit ex nihil sit ipsam? Dicta quidem expedita in at, quaerat ut, sunt repellat deserunt rem tempora tempore? Magnam in a est ipsum itaque blanditiis, similique veniam repellendus consectetur architecto harum. Voluptatum fuga quisquam deleniti pariatur eaque culpa reiciendis at tempore amet inventore, nulla ducimus tempora autem provident nesciunt qui modi rerum ipsum dolores! Tenetur officiis corrupti consectetur veniam quos dolorem, beatae provident iste. Numquam corporis earum est vitae placeat alias ipsum consectetur ex voluptatum inventore! Atque iusto iste, id inventore, sed rem reprehenderit hic, illo repellendus odit dicta! Rem libero consequatur repudiandae commodi nam, temporibus asperiores illum minima. Voluptas omnis quos ex consequuntur. Omnis libero et in dolorem soluta ex aliquid sed commodi quisquam culpa ea temporibus deleniti exercitationem perspiciatis eum minima est autem provident illum, dolorum sint dignissimos vero! Aspernatur dolorum dolorem pariatur dignissimos repellendus ratione magnam necessitatibus sunt quaerat magni molestiae expedita corrupti voluptate tempore voluptatem autem accusantium sint, soluta quia laboriosam aperiam. Rerum deserunt similique deleniti vitae porro alias? Itaque iusto illum adipisci blanditiis quisquam.
                    </Typography>
                </CardContent>
                <CardActions height="%100" disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="comment">
                        <ChatBubbleOutlineIcon />
                    </IconButton>
                </CardActions>
            </Card> */}
        </>
    );
}
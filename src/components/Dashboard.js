import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Link } from 'react-router-dom';
import { useFetch } from '../function/function';
import { Grid, Box } from '@mui/material';
import { AuthContext } from "../context/AuthContext";
import EmailIcon from '@mui/icons-material/Email';
import { failToastify } from '../utils/customToastify'





export default function Dashboard() {
    const { currentUser } = React.useContext(AuthContext);
    const { cardList, isLoading } = useFetch();
    console.log(`cardList`, cardList)
    const [liked, setLiked] = React.useState(null)


    return (
        <div className="App">
            <Typography noWrap align="center" variant="h3" component="h2">
                --------------DASHBOARD--------------
            </Typography>
            {
                isLoading ? (
                    <Typography variant="body1">
                        loading
                    </Typography>
                ) : cardList?.length === 0 ? (
                    <Typography variant="body1">
                        Nothing found
                    </Typography>
                ) : (
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2} sx={{ width: "100%", m: 3 }}>
                            {cardList?.map((item) => (
                                <Grid item xs={4}>
                                    <Card sx={{ maxWidth: 400 }} key={item?.id}>
                                        <Link 
                                        to={currentUser ? `detail/${item?.id}` : "/login"}
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                        onClick={()=> currentUser ? null : failToastify("Please Login!")}
                                        >
                                            <CardMedia
                                                component="img"
                                                height="194"
                                                src={item?.image}
                                                alt={item?.title}
                                            />
                                            <CardContent sx={{ height: 200 }}>
                                                <Typography gutterBottom variant="h4" component="div">
                                                    {item?.title}
                                                </Typography>
                                                {new Date().toLocaleDateString()}
                                                <Typography variant="body1">
                                                    {item?.content}
                                                </Typography>
                                            </CardContent>
                                        </Link>
                                        <CardActions height="%100" disableSpacing>
                                            <IconButton size="small">
                                                <EmailIcon />
                                                {item?.email}
                                            </IconButton>
                                        </CardActions>
                                        <CardActions disableSpacing>
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
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                )
            }
        </div>
    );
}
    // return (
    //     <div className="App">
    //         <Typography noWrap align="center" variant="h4" component="h2" sx={{ m: 5, color: "black", backgroundColor: "blueviolet", borderRadius: 5 }}>PLEASE LOGIN OR REGISTER</Typography>
    //         <Button sx={{ m: 3, color: "black", backgroundColor: "blueviolet", borderRadius: 5, ":hover": { backgroundColor: "yellow" } }}>
    //             <Link to="/register">REGISTER</Link>
    //         </Button>
    //         <Button sx={{ m: 3, color: "black", backgroundColor: "blueviolet", borderRadius: 5, ":hover": { backgroundColor: "yellow" } }}>
    //             <Link to="/login">LOGIN</Link>
    //         </Button>
    //     </div>
    // )
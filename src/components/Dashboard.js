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





export default function RecipeReviewCard() {
    const { cardList, isLoading } = useFetch();

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
                        <Grid container spacing={2} sx={{ width: "100%", m: 5 }}>
                            {cardList?.map((item) => (
                                <Grid item xs={3}>
                                    <Card sx={{ maxWidth: 400 }} key={item?.id}>
                                        <Link to="/detail"
                                        >
                                            <CardMedia
                                                component="img"
                                                height="194"
                                                src={item.image}
                                                alt={item.title}
                                            />
                                            <CardContent sx={{ height: 200 }}>
                                                <Typography gutterBottom variant="h4" component="div">
                                                    {item.title}
                                                </Typography>
                                                {"today"}
                                                <Typography variant="body2" color="text.secondary">
                                                    {item.content}
                                                </Typography>
                                            </CardContent>
                                        </Link>
                                        <CardActions disableSpacing>
                                            <IconButton aria-label="add to favorites">
                                                <FavoriteIcon />
                                            </IconButton>
                                            <IconButton aria-label="share">
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
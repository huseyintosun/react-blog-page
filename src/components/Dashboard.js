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




export default function RecipeReviewCard() {
    return (
        <>
            <Typography noWrap align="center" variant="h3" component="h2">
                --------------DASHBOARD--------------
            </Typography>;

            <Card sx={{ maxWidth: 345 }} >
                <Link to="/detail">
                    <CardMedia
                        component="img"
                        height="194"
                        src="https://www.mshowto.org/images/articles/2020/05/1_PY24xlr4TpOkXW04HUoqrQ.jpeg"
                        alt="Postgre SQL"
                    />
                    <CardContent>
                        {"today"}
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
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
        </>
    );
}
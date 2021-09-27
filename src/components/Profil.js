import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { AuthContext } from "../context/AuthContext";




export default function Profile() {
    const { currentUser } = React.useContext(AuthContext);
    return (
        <Card
            sx={{ width: "50%", textAlign: 'center', mt: 15, ml: "25%" }}
            fullWidth={true}
        >
            <CardContent>
                Display Name
                <Typography variant="body1" color="text.secondary">
                    {currentUser?.displayName}
                </Typography>
            </CardContent>
            <CardContent>
                Email
                <Typography variant="body1" color="text.secondary">
                    {currentUser?.email}
                </Typography>
            </CardContent>

        </Card>
    );
}
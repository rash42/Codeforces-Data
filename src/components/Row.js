import Tiles from "./Tiles";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Row() {
    const text_contest = `To get the details for all the past and upcomming contest click on the below button`;
    const text_user = `To search any user or to get any information about any user click on the below button`;
    const text_problem = `This section will show the different problem set for all the contest`;
    const text_blogs = `If you are interested in recent happenings in the codeforces website or want to learn something then click on the below button`

    return (
        <Box sx={{ flexGrow: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
            <Tiles name='Contests' text={text_contest} link='contests'></Tiles>
            <Tiles name='User info' text={text_user} link='user'></Tiles>
            <Tiles name='Problem set' text={text_problem} link='problems'></Tiles>
            <Tiles name='Blogs' text={text_blogs} link='blogs'></Tiles>
        </Box>
    )
}

export default Row
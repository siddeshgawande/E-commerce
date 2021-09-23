import { ImageURL } from '../../constants/data.js';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
    wrapper: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between'
    }
})

const MidSection = () => {
    const classes = useStyle();
    const coronaURL = 'https://cdn.shopify.com/s/files/1/0788/5983/files/banner3.jpg?v=1531420693';
    return (
        <>

            <Box className={classes.wrapper}>
                {
                    ImageURL.map(image => (
                        <img src={image} style={{ width: '33%' }} />
                    ))
                }
            </Box>
            <img src={coronaURL} style={{ width: '100%',marginTop:'20px' }} />
        </>
    )
}

export default MidSection;
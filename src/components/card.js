import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Highlighter from 'react-highlight-words'

import { json } from 'body-parser';

import loadingif from '../images/loading.gif'
import { FormHelperText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '80%',
        margin: '15px auto',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
    },
    media: {
        // height: 0,
        // paddingTop: '56.25%', // 16:9
// height: '300px',
display: 'flex',
alignContent: 'center',
background: `url(${loadingif})`,
backgroundPosition: 'center',
backgroundRepeat: 'no-repeat',
        '& img ': {
            // flex: 1,
            display: 'block',
            margin: 'auto',
        }
    },
    expand: {
        transform: 'rotate(0deg)',
        // marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    codes: {
        backgroundColor: props => props.colorz[0],
        color: '#fff',
        fill: '#fff',
    },
    cardheader: {
        backgroundColor: props => props.colorz[1],
    },
    textcontent: {
        // backgroundColor: props => props.colorz[2],
    },
}));

export default function FlpsCard(props) {
    const item = props.item
    const classes = useStyles(props);
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const jsonContent = JSON.parse(item.ContentArray)
    const contentTypog = jsonContent.map((i, index) => <Typography key={item.id + '_' + index } paragraph>
        <Highlighter
        className="hilitecontent"
        highlightClassName="hilite"
        searchWords={[props.searchTerm]}
        textToHighlight={i}
        /> 
        </Typography>)

    // const cardContent = item.Content && item.Content.length > 0 ? <Typography paragraph>{item.Content}</Typography> : ''
    // const cardContent = item.Content && item.Content.length > 0 ? item.Content.map((c, index) => <Typography key={index} paragraph>{c}</Typography>) : ''
    const jsonCodes = item.Codes !== '[]' ? JSON.parse(item.Codes) : []
    const codes = jsonCodes.map((c, index) => 
        <Typography variant="button" display="inline" key={c + '-' + index} gutterBottom>
          {c + (index === jsonCodes.length -1 ? '' : ', ')}
        </Typography>) 

    const imageParsed = imageParser(item.ID)
    const imageUrl = 'https://iiif.archivelab.org/iiif/' + imageParsed[0] + '$' + imageParsed[1] + '/full/600/0/default.jpg'
    const itemUrl = 'https://archive.org/details/' + imageParsed[0] 
    return (
        <Card className={classes.root} elevation={3} variant="outlined">
        <CardHeader
            title={item.Title}
            subheader={(item.TopTitle.length > 0 ? item.TopTitle + ', ' : '') + item.DateText}
            className={classes.cardheader}
        />
        <CardContent className={classes.codes}>
            {codes}
        </CardContent>
        <CardContent className={classes.textcontent}>
            {contentTypog}
        </CardContent>
        <CardActions disableSpacing className={classes.codes}>
            <IconButton
            className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon />
            </IconButton>

            <Typography>Card Images</Typography>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>

        <CardMedia
            className={classes.media}
            // image={imageUrl}
            title={item.title}
        >
            <img src={imageUrl} />
        </CardMedia>
        </Collapse>
        </Card>
    );
}

function imageParser(string){
    var i = string.lastIndexOf("_")
    var item = string.substr(0,i)
    var file = string.substr(i + 1)
    var fileNum = parseInt(file)
    return [item, file, fileNum]
}

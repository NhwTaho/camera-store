import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import blogPosts from '../assets/fake-data/blogs';
import Helmet from '../components/Helmet';
import Breadcrumb from '../components/Breadcrumb';


const Container = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  justifyContent: 'space-between',
});

const StyledCard = styled(Card)({
  maxWidth: '300px',
});

const StyledTypography = styled(Typography)({
  fontFamily: 'Poppins, sans-serif',
});

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [likedPosts, setLikedPosts] = React.useState([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLikeClick = (postId) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter((id) => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  return (
    <Helmet title='Blog'>
      <Breadcrumb title="Blog" link="Blog" slug="/blog"/>
      <Container>
      {blogPosts.map((post) => (
        <StyledCard key={post.id}>
          <CardMedia
            component="img"
            height="194"
            image={post.image}
            alt={post.title}
          />
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                H
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={<StyledTypography variant="h6" component="div">{post.title} </StyledTypography>}
            subheader={post.date}
          />
          <CardContent>
            <StyledTypography variant="body2" color="text.secondary">
              {/* Trích dẫn nội dung hoặc mô tả của blog tại đây */}
            </StyledTypography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              aria-label="add to favorites"
              onClick={() => handleLikeClick(post.id)}
            >
              <FavoriteIcon color={likedPosts.includes(post.id) ? 'error' : 'inherit'} />
              
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              aria-label="show more"
              onClick={handleExpandClick}
              aria-expanded={expanded}
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <StyledTypography paragraph variant="body1" textAlign="justify">{post.content}</StyledTypography>
              <StyledTypography paragraph textAlign="justify">
               
              </StyledTypography>
            </CardContent>
          </Collapse>
        </StyledCard>
      ))}
    </Container>
    
    </Helmet>
    
  );
}

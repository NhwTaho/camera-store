import React, { useState } from 'react';
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
import Pagination from '../components/Pagination'; // Import component phân trang

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
  fontFamily: 'Josefin Sans, sans-serif',
});

export default function RecipeReviewCard() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const [expandedState, setExpandedState] = useState({}); 

  const handleExpandClick = (postId) => {
    setExpandedState((prevExpanded) => {
      const newExpandedState = { ...prevExpanded };
      newExpandedState[postId] = !prevExpanded[postId];
      return newExpandedState;
    });
  };

  const [likedPosts, setLikedPosts] = useState([]);

  const handleLikeClick = (postId) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter((id) => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Helmet title='Blog'>
      <Breadcrumb title="Blog" link="Blog" slug="/blog"/>
      <Container>
        {currentPosts.map((post) => (
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
              title={<StyledTypography variant="h5" component="div">{post.title}</StyledTypography>}
              subheader={post.date}
            />
            <CardContent>
              <StyledTypography variant="body2" color="text.secondary">
                
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
                onClick={() => handleExpandClick(post.id)} 
                aria-expanded={expandedState[post.id]} 
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expandedState[post.id]} timeout="auto" unmountOnExit>
              <CardContent>
                <StyledTypography paragraph variant="h6" textAlign="justify">{post.content}</StyledTypography>
                <StyledTypography paragraph textAlign="justify">
                 
                </StyledTypography>
              </CardContent>
            </Collapse>
          </StyledCard>
        ))}
      </Container>
     
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={blogPosts.length}
        paginate={paginate}
      />
    </Helmet>
  );
}

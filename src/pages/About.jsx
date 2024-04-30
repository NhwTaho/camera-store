import React from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Helmet from '../components/Helmet';
import Breadcrumb from '../components/Breadcrumb';

const AboutImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  display: 'block',
});

const BoldTypography = styled(Typography)({
  fontWeight: 'bold',
});

const About = () => {
  return (
    <Helmet title="About">
      <Breadcrumb title="About" link="About" slug="/about"/>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper>
              <AboutImage src="https://cdn.tuoitre.vn/thumb_w/730/2021/7/14/photo-3-16262428541701919284243.jpg" alt="About Us" />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <BoldTypography variant="h4" gutterBottom fontFamily="Poppins, sans-serif">
                Who We Are ?
              </BoldTypography>
              <Typography variant="body1" fontFamily="Poppins, sans-serif">
              Chúng tôi là một tập đoàn đa quốc gia hàng đầu hoạt động trong lĩnh vực các thiết bị về mạng.
              </Typography>
              <BoldTypography variant="h4" gutterBottom mt={4} fontFamily="Poppins, sans-serif">
                Who We Do ?
              </BoldTypography>
              <Typography variant="body1" fontFamily="Poppins, sans-serif">
              Chúng tôi là nhà cung cấp hàng đầu thế giới về các giải pháp mạng, mang đến các sản phẩm và dịch vụ đáng tin cậy, hiệu suất cao và tiện lợi cho khách hàng.
              </Typography>
              <BoldTypography variant="h4" gutterBottom mt={4} fontFamily="Poppins, sans-serif">
                Why Choose Us
              </BoldTypography>
              <Typography variant="body1" fontFamily="Poppins, sans-serif">
                Chúng tôi trao quyền cho các đối tác giúp đạt được hiệu quả kinh doanh toàn cầu một cách phi thường và giúp người tiêu dùng tận hưởng những sự kỳ diệu của công nghệ
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Helmet>
  );
};

export default About;

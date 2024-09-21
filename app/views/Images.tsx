import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Container } from '@mui/material';
import { useImageViewModel } from '../viewmodels/ImageViewModel';

const Images: React.FC = () => {
  const { images } = useImageViewModel();

  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <Grid container spacing={4}>
        {images.map((image) => (
          <Grid item key={image.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia component="img" height="200" image={image.url} alt={image.title} />
              <CardContent>
                <Typography align="center">{image.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Images;

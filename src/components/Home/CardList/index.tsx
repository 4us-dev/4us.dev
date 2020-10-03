import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import React from "react"
import Link from "../../core/Link"
import useStyles from "./index.styles"

export interface CardData {
  title: string
  image: string
  description: string
  link: string
}

export interface Props {
  cards: CardData[]
}

const CardList: React.FC<Props> = ({ cards }) => {
  const classes = useStyles()

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {cards.map(card => (
          <Grid item key={card.title} xs={12} sm={6} md={4}>
            <Link href={card.link}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.image}
                  title={card.title}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                  </Typography>
                  <Typography>{card.description}</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default CardList

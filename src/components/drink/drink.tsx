import * as React from "react";
import {
  Box,
  UnorderedList,
  ListItem,
  Grid,
  GridItem,
  Heading,
  OrderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import type { DrinkType } from "../../types";

export const Drink = ({
  slug,
  title,
  content,
  ingredients,
  directions,
  image,
}: DrinkType) => {
  return (
    <Box>
      <Box marginBottom="4" borderRadius="md" overflow="hidden" display="flex">
        {image && (
          <Image
            src={require(`../../img/${image}`)}
            width="1024"
            height="680"
            quality="95"
            placeholder="blur"
          />
        )}
      </Box>
      <Heading as="h2" size="md" marginBottom="4">
        {title}
      </Heading>
      <Grid
        templateColumns={["1fr", "1fr", "1fr 1fr 1fr"]}
        gridColumnGap="10"
        gridRowGap="4"
      >
        <GridItem>{content}</GridItem>
        <GridItem>
          <OrderedList marginLeft="8">
            {directions?.map((direction) => (
              <ListItem key={slug + direction}>{direction}</ListItem>
            ))}
          </OrderedList>
        </GridItem>
        <GridItem>
          <UnorderedList>
            {ingredients?.map((ingredient) => (
              <ListItem key={slug + ingredient}>{ingredient}</ListItem>
            ))}
          </UnorderedList>
        </GridItem>
      </Grid>
    </Box>
  );
};

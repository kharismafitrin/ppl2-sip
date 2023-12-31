import { Card, CardBody, Divider, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import { ChatCircle } from "@phosphor-icons/react"
import React from 'react'
import { Link } from 'react-router-dom';
import UserForum from './UserForum';

const TopicCard = ({ data }) => {
  return (
    <Grid
      gap={8}
      pt={8}
    >
      {data.map((val) => (
        <GridItem key={val._id}>
          <Link to={`/forum/${val._id}`}>
            <Card 
              bgColor={'#F3EBBD'}
              rounded={'2xl'}
            >
              <CardBody>
                <UserForum authorName={val.penulis.name} tanggal={val.createdAt} />
                <Text fontSize={'lg'} fontWeight={'semibold'} mt={4}>{val.judul}</Text>
                <Text mt={1} mb={4}>{ val.isi }</Text>
                <Divider borderWidth={1} borderColor={'#540302'} />
                <Flex alignItems={'center'} gap={2} mt={2}>
                  <ChatCircle />
                  <Text>{ val.jumlah_komentar }</Text>
                </Flex>
              </CardBody>
            </Card>
          </Link>
        </GridItem>
      ))}
    </Grid>
  )
}

export default TopicCard
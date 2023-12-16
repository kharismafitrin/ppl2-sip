import { Flex } from '@chakra-ui/react';
import Banner from '../../components/Banner';
import { Suspense, lazy, useEffect, useState } from 'react';
import axios from 'axios';
import AddTopikModal from './AddTopikModal';
import SearchBar from '../../components/SearchBar';
import Loading from '../../components/Loading';

const TopicCardPreview = lazy(() => import('../../components/TopicCard'));

const MainPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [visibleData, setVisibleData] = useState([]);
  const [nextDataStart, setNextDataStart] = useState(3); // Index to start loading next set of data
  
  useEffect(() => {
    axios.get('http://localhost:5000/forums')
      .then(response => {
        setData(response.data);
        setLoading(false);
        setVisibleData(response.data.slice(0, nextDataStart)); // Load the initial set of data
      })
      .catch(error => {
        console.error('Error Fetching Data: ', error);
        setLoading(false);
      });
  }, [nextDataStart]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

    if (scrollPercentage > 50) {
      setNextDataStart(nextDataStart + 1); // Load the next set of data
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [nextDataStart]);

  const fetchedData = (searchInput) => {
    const filteredData = searchInput
      ? data.filter((forum) => 
          forum.judul.toLowerCase().includes(searchInput.toLowerCase()) ||
          forum.isi.toLowerCase().includes(searchInput.toLowerCase())
        )
      : data;

    return filteredData.slice(0, nextDataStart); // Return the current visible data
  };

  return (
    <Flex
      flexDirection={'column'}
      marginY={16}
      marginX={{base:20, xl:48}}
      gap={6}
    >
      <Banner title={"Forum"} desc={"Kami dengan bangga mempersembahkan wadah ini sebagai tempat bertemunya pikiran-pikiran brilian dan pandangan yang beragam."} />
      <Flex gap={8}>
        <SearchBar searchInput={searchInput} handleChange={handleChange} />
        <AddTopikModal />
      </Flex>
      <Suspense fallback={<Loading type={'bubbles'} color={'#4F7B58'} />}>
        { 
          loading ? <Loading type={'bubbles'} color={'#4F7B58'} /> :
          fetchedData(searchInput).length === 0 ? 'No results found.' : <TopicCardPreview data={fetchedData(searchInput)} />
        }
      </Suspense>
    </Flex>
  );
}

export default MainPage;

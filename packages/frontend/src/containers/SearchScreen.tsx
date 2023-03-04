import { useState } from "react";
import axios from "axios";
import {
  Typography,
  Box,
  Container,
  Button,
  Card,
  CardContent,
  Input,
  CardActionArea,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const fetchdata = async (title: string) => {
  try {
    if (title === "") return [];

    const response = await axios.get(
      `http://localhost:3000/movies?title=${title}`
    );

    console.log(response);

    if (response.data.Error) {
      return [];
    }

    return response.data.Search;
  } catch (error) {
    console.log(error);
  }
};

const SearchScreen = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [details, toggleDetails] = useState(false);

  const handleInput = (e: any) => {
    console.log(e.target.value.toLowerCase());
    setInput(e.target.value.toLowerCase());
  };

  const handleSearch = () => {
    fetchdata(input).then((searchResult) => setList(searchResult));
  };

  const displayDetails = (e: any) => {
    console.log(e.target.key);
    toggleDetails(!details);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component={"h1"}>
        Movie Searcher
      </Typography>
      <Input
        placeholder="Search title"
        onChange={handleInput}
        sx={{ minWidth: "15em", marginRight: "20px" }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
          }
        }}
      />

      <Button type="submit" onClick={handleSearch} variant="contained">
        <SearchIcon />
      </Button>

      <Box>
        {list.map((movie) => (
          <CardActionArea onClick={displayDetails} key={movie.imdbID}>
            <Card>
              <CardContent>
                <Typography>{movie.Title}</Typography>
              </CardContent>
            </Card>
          </CardActionArea>
        ))}
      </Box>
    </Container>
  );
};

export default SearchScreen;

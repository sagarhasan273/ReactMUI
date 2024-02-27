import React, { useState } from "react";
import {
  Container,
  Button,
  Typography,
  Box,
  IconButton,
  Paper,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddQuotationInput from "../common/addQuotationInputs";
import AddIcon from "@mui/icons-material/Add";

const paperStyle = { p: 1.5, mb: 1.5, mt: 1, borderRadius: "10px" };

function TestQuotationDrawer({ setState }) {
  const [topics, setTopics] = useState([]);
  const [topicFields, setTopicFields] = useState([
    { name: "Page", description: "" },
    { name: "Size", description: "" },
    { name: "Packet", description: "" },
  ]);
  const [prices, setPrices] = useState([]);
  const [priceFields, setPriceFields] = useState([
    { quantity: "", unitPrice: "", totalPrice: 0 },
  ]);

  const addTopicField = () => {
    setTopicFields((prevFields) => [
      ...prevFields,
      { name: "", description: "" },
    ]);
  };
  const addPriceField = () => {
    setPriceFields((prevFields) => [
      ...prevFields,
      { quantity: 0, unitPrice: 0, totalPrice: 0 },
    ]);
  };

  const removeTopicField = (index) => {
    setTopicFields((prevFields) => prevFields.filter((_, i) => i !== index));
  };

  const handleChangeTopic = (e, index, field) => {
    const newFields = [...topicFields];
    newFields[index][field] = e.target.value;
    setTopicFields(newFields);
  };
  const handleChangePrice = (e, index, field) => {
    const newFields = [...priceFields];
    newFields[index][field] = e.target.value;
    if (newFields[index].unitPrice && newFields[index].quantity) {
      newFields[index].totalPrice =
        newFields[index].unitPrice * newFields[index].quantity;
    } else {
      newFields[index].totalPrice = 0;
    }
    setPriceFields(newFields);
  };

  const addTopic = () => {
    setTopics((prevTopics) => [...prevTopics, ...topicFields]);
    setTopicFields([{ name: "", description: "" }]);
  };
  const addPrice = () => {
    setPrices((prevPrices) => [...prevPrices, ...priceFields]);
    setPriceFields([{ quantity: "", unitPrice: "", totalPrice: "" }]);
  };

  return (
    <Container
      sx={{
        width: "300px",
        height: "100%",
        overflow: 'hidden',
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: "-20px",
          right: "-20px",
          overflowY: "scroll",
          pl: 2.5,
          pr: 2.5
        }}
      >
        <Stack
          sx={{
            height: "60px",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            position: "sticky",
            top: 0,
            zIndex: 1,
            backgroundColor: "white",
          }}
        >
          <Typography>Add Quotation</Typography>
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setState(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </Stack>
        <Paper variant="outlined" sx={{ ...paperStyle }}>
          <AddQuotationInput
            setChange={() => {}}
            txt="Title"
            ph="Write title here..."
          />
        </Paper>

        {/* Topics block */}
        <Typography>Topics</Typography>
        {topicFields.map((field, index) => (
          <Paper variant="outlined" key={index} sx={{ ...paperStyle }}>
            <Stack sx={{ flexDirection: "row-reverse" }}>
              <IconButton
                sx={{
                  backgroundColor: "#757575",
                  color: "white",
                  p: 0,
                  width: "20px",
                  height: "20px",
                  "&:hover": {
                    backgroundColor: "#757575",
                  },
                }}
                size="small"
                onClick={() => removeTopicField(index)}
              >
                <CloseIcon color="white" fontSize="inherit" />
              </IconButton>
            </Stack>
            <AddQuotationInput
              value={field.name}
              setChange={(e) => handleChangeTopic(e, index, "name")}
              txt="Topic Name"
              ph="Write name.."
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: "14px",
                },
              }}
            />
            <AddQuotationInput
              txt="Description"
              value={field.description}
              setChange={(e) => handleChangeTopic(e, index, "description")}
              sx={{
                "& .MuiInputBase-input": {
                  height: "60px",
                  fontSize: "14px",
                },
              }}
              ph="Write your description here..."
            />
          </Paper>
        ))}

        <Button
          style={{
            height: "35px",
            gap: "5px",
            border: "none",
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            padding: "0px",
            margin: "8px",
            marginBottom: "15px",
            cursor: "pointer",
          }}
          onClick={addTopicField}
        >
          <AddIcon sx={{ fontSize: "18px", color: "primary.main" }} />
          <Typography
            sx={{
              fontSize: "16px",
              textTransform: "none",
              color: "primary.main",
            }}
          >
            Add Topic
          </Typography>
        </Button>

        {/* Price List  */}
        <Typography>Price List</Typography>
        {priceFields.map((field, index) => (
          <Paper variant="outlined" key={index} sx={{ ...paperStyle }}>
            <Stack sx={{ flexDirection: "row-reverse" }}>
              <IconButton
                sx={{
                  backgroundColor: "#757575",
                  color: "white",
                  p: 0,
                  width: "20px",
                  height: "20px",
                  "&:hover": {
                    backgroundColor: "#757575",
                  },
                }}
                size="small"
                onClick={() => removeTopicField(index)}
              >
                <CloseIcon color="white" fontSize="inherit" />
              </IconButton>
            </Stack>
            <AddQuotationInput
              value={field.quantity}
              setChange={(e) => handleChangePrice(e, index, "quantity")}
              txt="Quantity"
              ph="Write your quantity here.."
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: "14px",
                },
              }}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <AddQuotationInput
              value={field.unitPrice}
              setChange={(e) => handleChangePrice(e, index, "unitPrice")}
              txt="Unit Price"
              ph="Write your unitPrice here.."
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: "14px",
                },
              }}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <AddQuotationInput
              value={field.totalPrice}
              setChange={(e) => handleChangePrice(e, index, "totalPrice")}
              txt="Total Price"
              ph="Write your unit price here.."
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: "14px",
                },
              }}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Paper>
        ))}

        <Button
          style={{
            height: "35px",
            gap: "5px",
            border: "none",
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            padding: "0px",
            margin: "8px",
            marginBottom: "15px",
            cursor: "pointer",
          }}
          onClick={addPriceField}
        >
          <AddIcon sx={{ fontSize: "18px", color: "primary.main" }} />
          <Typography
            sx={{
              fontSize: "16px",
              textTransform: "none",
              color: "primary.main",
            }}
          >
            Add Price
          </Typography>
        </Button>

        {/* View topics */}
        <Button variant="contained" onClick={addTopic} disableElevation>
          Add Topics
        </Button>
        <Button variant="contained" onClick={addPrice} disableElevation>
          Add Prices
        </Button>

        <Box marginTop={2}>
          <Typography variant="h5" gutterBottom>
            Topics:
          </Typography>
          {topics.map((topic, index) => (
            <Paper
              key={index}
              border="1px solid #ccc"
              padding={2}
              marginBottom={2}
              borderRadius={4}
            >
              <Typography variant="subtitle1" gutterBottom>
                Topic {index + 1}:
              </Typography>
              <Typography variant="body1" gutterBottom>
                Name: {topic.name}
              </Typography>
              <Typography variant="body1">
                Description: {topic.description}
              </Typography>
            </Paper>
          ))}
        </Box>
        <Box marginTop={2}>
          <Typography variant="h5" gutterBottom>
            Prices:
          </Typography>
          {prices.map((topic, index) => (
            <Paper
              key={index}
              border="1px solid #ccc"
              padding={2}
              marginBottom={2}
              borderRadius={4}
            >
              <Typography variant="subtitle1" gutterBottom>
                Topic {index + 1}:
              </Typography>
              <Typography variant="body1" gutterBottom>
                Quantity: {topic.quantity}
              </Typography>
              <Typography variant="body1">
                Unit Price: {topic.unitPrice}
              </Typography>
              <Typography variant="body1">
                Total Price: {topic.totalPrice}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default TestQuotationDrawer;

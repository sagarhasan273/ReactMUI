import React, { useState } from 'react';
import { Container, Button, TextField, Typography, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function TestQuotationDrawer() {
  const [topics, setTopics] = useState([]);
  const [topicFields, setTopicFields] = useState([{ name: '', description: '' }]);

  const addTopicField = () => {
    setTopicFields(prevFields => [...prevFields, { name: '', description: '' }]);
  };

  const removeTopicField = (index) => {
    setTopicFields(prevFields => prevFields.filter((_, i) => i !== index));
  };

  const handleChange = (e, index, field) => {
    const newFields = [...topicFields];
    newFields[index][field] = e.target.value;
    setTopicFields(newFields);
  };

  const addTopic = () => {
    setTopics(prevTopics => [...prevTopics, ...topicFields]);
    setTopicFields([{ name: '', description: '' }]);
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Add Quotation
      </Typography>
      {topicFields.map((field, index) => (
        <Box key={index} marginBottom={2}>
          <TextField
            label="Topic Name"
            value={field.name}
            onChange={(e) => handleChange(e, index, 'name')}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Topic Description"
            value={field.description}
            onChange={(e) => handleChange(e, index, 'description')}
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <IconButton onClick={() => removeTopicField(index)}>
            <CloseIcon />
          </IconButton>
        </Box>
      ))}
      <Button variant="contained" onClick={addTopicField} disableElevation>
        Add Field
      </Button>
      <Button variant="contained" onClick={addTopic} disableElevation>
        Add Topics
      </Button>
      <Box marginTop={2}>
        <Typography variant="h5" gutterBottom>
          Topics:
        </Typography>
        {topics.map((topic, index) => (
          <Box key={index} border="1px solid #ccc" padding={2} marginBottom={2} borderRadius={4}>
            <Typography variant="subtitle1" gutterBottom>
              Topic {index + 1}:
            </Typography>
            <Typography variant="body1" gutterBottom>
              Name: {topic.name}
            </Typography>
            <Typography variant="body1">
              Description: {topic.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default TestQuotationDrawer;

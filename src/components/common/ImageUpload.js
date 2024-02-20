import { Avatar, Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Stack } from "@mui/system";
import UploadIcon from "@mui/icons-material/Upload";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

// const imageMimeType = /image\/(png|jpg|jpeg)/i;

export default function UploadButtons({ txt, formData, setFormData }) {
  const [fileDataURL, setFileDataURL] = useState(null);
  const theme = useTheme();

  const onDrop = (event) => {
    const files = Array.from(event.target.files);
    const newFiles = files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );

    setFileDataURL(URL.createObjectURL(newFiles[0]));
    setFormData((prev) => ({
      ...prev,
      image: newFiles,
    }));
  };

  const crossHandle = () => {
    setFileDataURL(null);
    setFormData((prev) => ({
      ...prev,
      image: '',
    }));
  }

  return (
    <Stack gap={1}>
      <Typography>{txt}</Typography>
      <input
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
        onChange={onDrop}
        hidden
      />
      <label htmlFor="contained-button-file">
        <Stack
          sx={{
            height: "70px",
            backgroundColor: "#FAFAFA",
            p: 3,
            flexDirection: "row",
            alignItems: "center",
            border: `2px dashed ${theme.palette.primary.main}`,
            borderRadius: "15px",
          }}
        >
          <UploadIcon />
          <Typography sx={{ fontSize: "14px" }}>
            Drop files here or click to upload
          </Typography>
        </Stack>
      </label>
      {fileDataURL ? (
        <Box sx={{ position: "relative" }}>
          <Avatar
            alt="Preview"
            src={fileDataURL}
            sx={{ width: 86, height: 86 }}
          />
          <Button
            sx={{ position: "absolute", top: 0, left: 72, p: 0, minWidth: 27 }}
            onClick={crossHandle}
          >
            <CloseIcon />
          </Button>
        </Box>
      ) : null}
    </Stack>
  );
}

import React, { useState } from "react";
import { useEffect } from "react";
import {
  Box,
  Card,
  Typography,
  TextField,
  Button,
  Chip,
  Avatar,
  Grid,
  Stack,
  Paper,
  IconButton,
  MenuItem,
  InputAdornment,
  Divider,
  Badge,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export default function CitizenDashboard() {
const [complaints, setComplaints] = useState([]);
const [errors, setErrors] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedComplaint, setSelectedComplaint] = useState(null);
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
  // New Form States
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [urgency, setUrgency] = useState("");
  const [details, setDetails] = useState("");
 const [visibility, setVisibility] = useState("");
useEffect(() => {
  fetch("http://localhost:5000/api/user") // create this API later
    .then((res) => res.json())
    .then((data) => setUser(data))
    .catch(() => {
      // fallback (temporary)
      setUser({
        name: "Guest User",
        email: "guest@email.com",
        phone: "N/A",
        location: "Unknown",
      });
    });
}, []);
useEffect(() => {
  setLoading(true);

  fetch("http://localhost:5000/api/complaints")
    .then((res) => res.json())
    .then((data) => {
      const formatted = data.map((c) => ({
        ...c,
        id: c._id,
        date: new Date(c.date).toLocaleDateString(),
        color: c.status === "Submitted" ? "primary" : "warning",
      }));

      setComplaints(formatted);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
}, []);

  const handleAddComplaint = async (e) => {
  e.preventDefault();
  const newErrors = {};

if (!title) newErrors.title = "Title is required";
if (!category) newErrors.category = "Category is required";
if (!urgency) newErrors.urgency = "Urgency is required";
if (!details) newErrors.details = "Details is required";

setErrors(newErrors);

if (Object.keys(newErrors).length > 0) return;

  const newComplaint = {
    title,
    category,
    urgency,
    details,
    userId: user._id
  };

  try {
    const res = await fetch("http://localhost:5000/api/complaints", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComplaint),
    });

    const data = await res.json();
    const formatted = {
  ...data,
  id: data._id,
  date: new Date(data.date).toLocaleDateString(),
  color: "primary",
};

    // Add new complaint from backend response
    setComplaints([formatted, ...complaints]);

    // Reset form
    setTitle("");
    setCategory("");
    setUrgency("");
    setDetails("");
  } catch (err) {
    console.error(err);
  }
};
  // Filter for Track Complaint
  const userId = user?._id;

const filteredComplaints = complaints.filter(
  (c) =>
    c.userId === userId &&
    (
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (c.id || "").toLowerCase().includes(searchQuery.toLowerCase())
    )
);
  const getUrgencyChipColor = (level) => {
    switch (level) {
      case "Urgent":
        return "error";
      case "Medium":
        return "warning";
      default:
        return "success";
    }
  };
  if (!user) {
    return <Typography sx={{ p: 4 }}>Loading...</Typography>;
  }

  return (
   <Box sx={{ minHeight: "100vh", bgcolor: "#f8fafc" , p: 3, fontFamily: "system-ui", fontSize: "14px" }}>
      {/* Top Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700,bgcolor :"#6b8d78", color: "#0f172a", fontSize: "2.5rem" }}>
          Citizen Dashboard
        </Typography>
        <IconButton sx={{ bgcolor: "#ffffff", boxShadow: 1 }}>
          <Badge  color="error">
            <NotificationsIcon sx={{ color: "#64748b" }} />
          </Badge>
        </IconButton>
      </Box>

      {/* TOP ROW: Profile | Track Details */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* Profile Section */}
        <Grid item xs={12} lg={6}>
          <Card sx={{ p: 3, borderRadius: 3,bgcolor :"#94baa2", height: "100%", boxShadow: "0 4px 20px rgba(45, 226, 25, 0.1)", border: "1px solid #e2e8f0" }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: "#0f172a", mb: 3, fontSize: "1.5rem" }}>
              Profile
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={3} alignItems="center">
              <Avatar sx={{ width: 80, height: 80, bgcolor: "#1976d2", fontSize: "2rem" }}>
                {user?.name ? user.name.split(" ").map(n => n[0]).join("").toUpperCase() : "U"}
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h5" fontWeight={700} color="#0f172a" mb={1.5}>
                  {user?.name || "Loading..."}
                </Typography>
                <Stack spacing={1.5} color="#64748b">
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <EmailIcon fontSize="small" /> 
                    <Typography variant="body2">{user?.email || "N/A"}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <PhoneIcon fontSize="small" /> 
                    <Typography variant="body2">{user?.phone || "N/A"}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <LocationOnIcon fontSize="small" /> 
                    <Typography variant="body2">{user?.location || "N/A"}</Typography>
                  </Box>
                </Stack>
                <Chip label={`Citizen ID: ${user._id || "N/A"}`} sx={{ mt: 2 }} color="primary" variant="outlined" />
              </Box>
            </Stack>
          </Card>
        </Grid>

        {/* Track Details Section */}
        <Grid item xs={12} lg={6}>
          <Card sx={{ p: 3, borderRadius: 3, height: "100%",bgcolor :"#94baa2", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", border: "1px solid #6385b2" }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: "#0f172a", mb: 3, fontSize: "1.5rem" }}>
              Track Details
            </Typography>
            <TextField
              fullWidth
              placeholder="Search by ID or Title"
              size="small"
              sx={{ mb: 3 }}
              InputProps={{
                startAdornment: <InputAdornment position="start"><SearchIcon color="action" /></InputAdornment>,
              }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Paper sx={{ p: 3, minHeight: 200, borderRadius: 2, border: "1px solid #e2e8f0", bgcolor:"#6a9175" }}>
              {selectedComplaint ? (
                <Box>
                  <Typography variant="h6" fontWeight={600} color="#0f172a" gutterBottom>
                    {selectedComplaint.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    ID: <strong>{selectedComplaint.id}</strong> | {selectedComplaint.category}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="body2" color="#64748b" gutterBottom>
                    Status: <Chip label={selectedComplaint.status} color={selectedComplaint.color} size="small" sx={{ ml: 1 }} />
                  </Typography>
                  <Typography variant="body2" color="#64748b">
                    Urgency: <Chip label={selectedComplaint.urgency} color={getUrgencyChipColor(selectedComplaint.urgency)} size="small" variant="outlined" sx={{ ml: 1 }} />
                  </Typography>
                </Box>
              ) : (
                <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                  <Typography variant="body2" color="text.secondary" textAlign="center">
                    Select a complaint from "My Complaints" to track details
                  </Typography>
                </Box>
              )}
            </Paper>
          </Card>
        </Grid>
      </Grid>

      {/* BOTTOM ROW: Complaint Form | My Complaints */}
      <Grid container spacing={3} direction={"column"}>
        {/* Complaint Form */}
        <Grid item xs={12}  >
          <Card sx={{ p: 3, borderRadius: 3,bgcolor :"#94baa2", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", border: "1px solid #e2e8f0" }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: "#0f172a", mb: 3, fontSize: "1.5rem" }}>
              Complaint Form
            </Typography>
            <Box component="form" onSubmit={handleAddComplaint}>
              <Grid container spacing={2}>
                <Grid item xs={12}><TextField fullWidth label="Complaint Title" size="small" value={title} onChange={(e) => setTitle(e.target.value) }  error={!!errors.title}
  helperText={errors.title} /></Grid>
                <Grid item xs={6}>
                  <TextField fullWidth select label="Category" size="small" value={category} onChange={(e) => setCategory(e.target.value)}  error={!!errors.category}
  helperText={errors.category}>
                    <MenuItem value="Electricity">Electricity</MenuItem>
                    <MenuItem value="Roads">Roads & Infrastructure</MenuItem>
                    <MenuItem value="Sanitation">Sanitation</MenuItem>
                    <MenuItem value="Water">Water Supply</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth select label="Urgency" size="small" value={urgency} onChange={(e) => setUrgency(e.target.value)}  error={!!errors.urgency}
  helperText={errors.urgency}>
                    <MenuItem value="Normal">Normal</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="Urgent">Urgent</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth select label="Visibility" size="small" value={visibility} onChange={(e) => setVisibility(e.target.value)} >
                    <MenuItem value="Public">Public</MenuItem>
                    <MenuItem value="Private">Private</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Details" multiline rows={3} value={details} onChange={(e) => setDetails(e.target.value)} error={!!errors.details}
  helperText={errors.details} />
                </Grid>
              </Grid>
              <Stack direction="row" justifyContent="space-between"  spacing={4} mt={4}>
                <IconButton color="primary" component="label" sx={{ border: "1px dashed #cbd5e1",bgcolor:"#114fad", borderRadius: 2 }}>
                  <input hidden accept="image/*" type="file" />
                  <PhotoCamera sx={{ mr: 1 }} fontSize="small" /> Upload
                </IconButton>
                <Button type="submit" variant="contained" endIcon={<SendIcon />} sx={{ px: 4 }}>
                  SUBMIT
                </Button>
              </Stack>
            </Box>
          </Card>
        </Grid>

        {/* My Complaints */}
        <Grid item xs={12} >
          <Paper sx={{ p: 3, borderRadius: 3,bgcolor :"#94baa2", height: "100%", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", border: "1px solid #e2e8f0" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: "#0f172a", fontSize: "1.5rem" }}>
                My Complaints
              </Typography>
              <Button sx={{ textTransform: "none", fontWeight: 600, color: "#2563eb" }}>
                View All
              </Button>
            </Box>
            <Box sx={{ maxHeight: 400, overflowY: "auto" }}>
             {loading ? (
  <Typography>Loading complaints...</Typography>
) : filteredComplaints.length === 0 ? (
  <Typography>No complaints found</Typography>
) : (
  filteredComplaints.map((c) => (
    <Paper
      key={c.id}
      sx={{
        p: 2.5,
        mb: 2,
        borderRadius: 2,
        border: "1px solid #e2e8f0",
        cursor: "pointer",
        "&:hover": {
          borderColor: "#3b82f6",
          bgcolor: "#f8fafc",
        },
      }}
      onClick={() => setSelectedComplaint(c)}
    >
      
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography sx={{ fontWeight: 600, color: "#0f172a" }}>
          {c.title}
        </Typography>

        <Chip
          label={c.urgency}
          size="small"
          color={getUrgencyChipColor(c.urgency)}
          variant="outlined"
        />
      </Box>

      <Typography
        sx={{ fontSize: "0.875rem", color: "#64748b", mb: 1.5 }}
      >
        {c.category} • {c.id} • {c.date}
      </Typography>

      <Chip label={c.status} color={c.color} size="small" />
    </Paper>
  ))
)}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

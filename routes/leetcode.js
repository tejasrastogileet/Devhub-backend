const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/:username", async (req, res) => {
  try {
    const username = req.params.username;

    const apiUrl = `https://leetcode-stats-api.herokuapp.com/${username}`;

    const response = await axios.get(apiUrl);

    if (response.data.status !== "success") {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({
      totalSolved: response.data.totalSolved,
      easySolved: response.data.easySolved,
      mediumSolved: response.data.mediumSolved,
      hardSolved: response.data.hardSolved,
      acceptanceRate: response.data.acceptanceRate,
      ranking: response.data.ranking,
    });

  } catch (err) {
    console.error("LeetCode API error:", err.message);
    res.status(500).json({ error: "LeetCode API failed" });
  }
});

module.exports = router;
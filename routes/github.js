const express = require("express");
const axios = require("axios");
const router = express.Router();

// ⭐ FIXED FULL GITHUB STATS API
router.get("/full/:username", async (req, res) => {
  try {
    const username = req.params.username;

    // User profile
    const userRes = await axios.get(`https://api.github.com/users/${username}`);
    const user = userRes.data;

    // Repos
    const reposRes = await axios.get(`https://api.github.com/users/${username}/repos`);
    const repos = reposRes.data;

    // Total stars
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

    // ⭐ Fix: return keys matching frontend
    res.json({
      login: user.login,
      name: user.name,
      avatar_url: user.avatar_url,
      bio: user.bio,
      followers: user.followers,
      following: user.following,
      public_repos: user.public_repos,
      public_gists: user.public_gists,
      created_at: user.created_at,
      total_stars: totalStars
    });

  } catch (err) {
    console.error("GitHub API Error:", err.message);
    res.status(500).json({ error: "GitHub API error" });
  }
});

module.exports = router;

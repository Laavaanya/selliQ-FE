import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.scss";
import ReactMarkdown from 'react-markdown';

const Monitor = () => {
  const fallbackData = [
    {
      id: 1,
      name: "Vercel",
      logo: "src/assets/logo-vercel.png",
      description:
        "Vercel is a cloud platform for static sites and Serverless Functions. It enables developers to deploy websites instantly with zero configuration, integrates seamlessly with Git, and provides serverless APIs and edge functions for dynamic experiences.",
      linkedInPosts: [
        "https://www.linkedin.com/posts/vercel_how-nous-research-used-botid-to-block-automated-activity-7394503278987878400-_nrd",
        "https://www.linkedin.com/posts/vercel_vercel-the-anti-vendor-lock-in-cloud-vercel-activity-7393778486882050048-Ykxx",
      ],
      // updates: "Pricing for Pro plan updated to $20/month.",
      linkedInUrl: "https://www.linkedin.com/company/vercel",
      websiteUrl: "https://vercel.com/",
    },
    {
      id: 2,
      name: "Render",
      logo: "src/assets/abc_logo.png",
      description:
        "Render provides cloud hosting for web apps, APIs, and static sites with automated deploys from Git. Developers can use managed databases, cron jobs, and private services easily.",
      linkedInPosts: ["https://render.com/blog/1", "https://render.com/blog/2"],
      updates:
        "Feature update: Background jobs can now run longer than 15 minutes. Added support for automatic TLS renewal.",
      linkedInUrl: "https://www.linkedin.com/company/render",
      websiteUrl: "https://render.com/",
      website_url: "https://render.com",
    },
    {
      id: 3,
      name: "Stacktape",
      logo: "src/assets/stacktape_logo.jpeg",
      description:
        "Stacktape helps monitor deployments and logs in one place. It combines simplicity and scalability for developers managing multiple environments.",
      linkedInPosts: ["https://stacktape.com/blog/1", "https://stacktape.com/blog/2"],
      updates:
        "New feature: Real-time alert notifications via Slack. Dashboard redesigned for better usability.",
      linkedInUrl: "https://www.linkedin.com/company/stacktape",
      websiteUrl: "https://stacktape.com/",
      website_url: "https://stacktape.com",
    },
  ];

  const [selected, setSelected] = useState(null);
  const [competitors, setCompetitors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/competitors")
      .then((response) => {
        setCompetitors(response.data.competitors);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching competitors:", error);
        setCompetitors(fallbackData);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="Investor">
        <p>Loading Competitor details...</p>
      </div>
    );
  }

  const handleRedirection = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="monitor-container">
      <h2>Competitors Under the Microscope</h2>

      <div className="cards">
        {competitors.map((item) => (
          <div
            key={item.id}
            className="card pulse"
            onClick={() => setSelected(item)}
          >
            <div className="card-header">
              <div className="title-badge">
                <h3>{item.name}</h3>
                {item.updates && item.updates.trim() !== "" && (
                  <span className="badge">New Update</span>
                )}
              </div>
              <img src={item.logo} alt={item.name} className="logo" />
            </div>

            <div className="card-body">
              <p>{item.description.slice(0, 130)}...</p>
            </div>

            <div className="card-footer">
              <a
                href={item.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-link"
                onClick={(e) => e.stopPropagation()}
              >
                Visit Website →
              </a>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <>
          <div
            className="drawer-overlay"
            onClick={() => setSelected(null)}
          ></div>
          <div className={`drawer ${selected ? "open" : ""}`}>
            <div className="drawer-header">
              <h2>{selected.name}</h2>
              <button className="close-btn" onClick={() => setSelected(null)}>
                ✕
              </button>
            </div>
            <p>{selected.description}</p>


            <h4>Recent Posts</h4>
            <ul>
              {selected.linkedInPosts.map((link, i) => (
                <li key={i}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {link.length > 60 ? link.slice(0, 60) + "..." : link}
                  </a>
                </li>
              ))}
            </ul>

            {selected?.updates && selected?.updates.trim() !== "" && (
              <>
                <h4>Recent Updates</h4>
                <p><ReactMarkdown>{selected?.updates?.split("Summary of Changes")?.[0].replaceAll('Doc 1','previous')?.replaceAll('Doc 2','new')}</ReactMarkdown></p>
              </>
            )}

            <div className="drawer-footer">
              <a
                href={selected.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-site"
              >
                Visit Site
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Monitor;

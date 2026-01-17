import React, { useEffect, useState } from "react";
import { Table, Spin, Tag, Typography, Alert } from "antd";
import "./index.scss";
import axios from "axios";

const { Text } = Typography;

const sampleData = {
  results: [
    {
      client_name: "scrapez",
      client_email: "sri.srisailam@rootquotient.com",
      reconstructed_email_thread:
        "1. **From**: Me\n   **To**: Sri\n   **Date**: 2023/10/01\n   **Message**: Hi Sri, I hope you're doing well. I wanted to share how Revolte can enhance your web development processes.\n   **Sentiment**: Positive\n\n2. **From**: Sri\n   **To**: Me\n   **Date**: 2023/10/02\n   **Message**: Thanks for reaching out. Can you provide more details on your pricing model?\n   **Sentiment**: Neutral\n\n3. **From**: Me\n   **To**: Sri\n   **Date**: 2023/10/03\n   **Message**: Absolutely! Revolte offers various subscription tiers suitable for different team sizes. The pricing starts at $0/month. Would you prefer a look at the enterprise options since you are with Scrapez?\n   **Sentiment**: Positive\n\n4. **From**: Sri\n   **To**: Me\n   **Date**: 2023/10/04\n   **Message**: That sounds interesting. What are the key features?\n   **Sentiment**: Positive\n\n5. **From**: Me\n   **To**: Sri\n   **Date**: 2023/10/05\n   **Message**: Our platform integrates security, observability and developer experience. It can significantly accelerate your development cycles. I think it aligns well with your technologies.\n   **Sentiment**: Positive\n\n6. **From**: Sri\n   **To**: Me\n   **Date**: 2023/10/06\n   **Message**: Let's set up a call to discuss further.\n   **Sentiment**: Positive\n\n7. **From**: Me\n   **To**: Sri\n   **Date**: 2023/10/07\n   **Message**: Great! How does next week look?\n   **Sentiment**: Positive",
      lead_score_breakdown: {
        base_score: 10,
        response_rate_points: 10,
        avg_response_time_points: 0,
        positive_sentiment_points: 35,
        budget_discussed_points: 0,
        multiple_stakeholders_points: 0,
        meeting_scheduled_points: 15,
        technical_questions_points: 10,
        company_size_points: 0,
        decision_maker_points: 10,
        no_response_penalty: 0,
        negative_sentiment_penalty: 0,
        price_objection_penalty: 0,
        ghosting_penalty: 0,
        final_score: 90,
      },
      conversion_likelihood: {
        category: "HOT LEAD",
        reason:
          "Strong positive engagement and an explicit request to set up a meeting.",
      },
      lead_fit_analysis: {
        fit_rating: "Excellent",
        budget_alignment: "Aligned with enterprise pricing options.",
        technical_alignment:
          "Strong fit with their modern web development and cloud application focus.",
        company_stage_alignment:
          "Well-aligned; Scrapez's scale and specialization in tech matches Revolte's offerings.",
        overall_fit_reason:
          "Scrapez's large scale and digital engineering focus can greatly benefit from Revolte's features.",
      },
      pitch_quality_evaluation: {
        strengths:
          "Clear value articulation of Revolte's integration of security, observability, and developer experience.",
        weaknesses:
          "Need for deeper value elaboration on potential cost savings and ROI.",
        missed_opportunities:
          "Could emphasize specific case studies or success stories of similar companies.",
        recommended_focus_areas:
          "Highlight ROI, tool consolidation, and security features.",
      },
      next_steps: {
        followup_messages: [
          "Looking forward to our call next week, Sri! Please let me know your available times.",
          "In the meantime, I can send over some case studies that showcase how similar enterprises have leveraged Revolte.",
          "Let me know if you have any preliminary questions before our meeting.",
        ],
        ghosting_nudges: [
          "Hi Sri, just wanted to circle back as we had planned a call. Are we still good for our scheduled time?",
          "If your schedule has changed, please let me know. I’m here to accommodate.",
        ],
        strong_conversion_attempt:
          "I'm confident Revolte will streamline your operations, and I'm eager to explore how we can partner for success!",
        value_reinforcement_message:
          "Revolte not only secures your infrastructure but also enhances development agility, which aligns perfectly with Scrapez's goals.",
      },
    },
    {
      client_name: "twellix",
      client_email: "lavanya.kalathi@rootquotient.com",
      reconstructed_email_thread:
        "Subject: Our Recent Discussion on Revolte\n\nHi Lavanya,\n\nThank you for our recent conversation about how Revolte can meet Twellix's needs. I’d love to dive deeper into your specific requirements and how our platform can provide value to your projects.\n\nLooking forward to hearing from you soon!\n\nBest,\n[Your Name]  \n[Your Position]  \nRevolte\n\n---\n\nSubject: Re: Our Recent Discussion on Revolte\n\nHi [Your Name],\n\nThanks for reaching out! I’m looking forward to exploring how Revolte can support our projects further. We’re evaluating several options and would like to understand pricing and features in more detail.\n\nBest,\nLavanya\n\n---\n\nSubject: Re: Our Recent Discussion on Revolte\n\nHi Lavanya,\n\nI’m glad to hear that! I can send over detailed documentation regarding our subscription plans and features. Additionally, we can schedule a time to discuss how we can tailor our offerings to fit Twellix's requirements.\n\nLet me know what works for you!\n\nBest,\n[Your Name]  \n[Your Position]  \nRevolte",
      lead_score_breakdown: {
        base_score: 10,
        response_rate_points: 10,
        avg_response_time_points: 0,
        positive_sentiment_points: 10,
        budget_discussed_points: 0,
        multiple_stakeholders_points: 0,
        meeting_scheduled_points: 0,
        technical_questions_points: 10,
        company_size_points: 0,
        decision_maker_points: 10,
        no_response_penalty: 0,
        negative_sentiment_penalty: 0,
        price_objection_penalty: 0,
        ghosting_penalty: 0,
        final_score: 50,
      },
      conversion_likelihood: {
        category: "COLD LEAD",
        reason:
          "While there is positive engagement and some interest, the lead has not yet made a decisive commitment or scheduled a meeting.",
      },
      lead_fit_analysis: {
        fit_rating: "Good",
        budget_alignment:
          "Moderate - not explicitly discussed, but startup companies often have limited budgets.",
        technical_alignment:
          "Strong - Twellix's focus on web development aligns well with Revolte's platform capabilities.",
        company_stage_alignment:
          "Good - As a growing startup, Twellix might benefit from Revolte's scalable features.",
        overall_fit_reason:
          "Twellix's needs for reliable and fast deployments align with what Revolte offers, but budget constraints may limit initial adoption.",
      },
      pitch_quality_evaluation: {
        strengths:
          "The pitch was tailored to Twellix's needs, and revolved around the value propositions of Revolte's platform.",
        weaknesses:
          "Lack of strong calls to action for scheduling a meeting or further engagement.",
        missed_opportunities:
          "Failed to address potential budget concerns or provide clear pricing structures that meet startup needs.",
        recommended_focus_areas:
          "Focus on demonstrating cost savings, flexible pricing options, and use cases relevant to smaller development teams.",
      },
      next_steps: {
        followup_messages: [
          "Hi Lavanya, just wanted to check in and see if you had any questions about the documentation I sent.",
          "I’d like to offer a demo of Revolte tailored specifically for Twellix’s projects. When would be a good time for you?",
          "If you’re still evaluating options, I’m here to help clarify any points or discuss how we can make Revolte work for you.",
        ],
        ghosting_nudges: [
          "Hi Lavanya, I haven't heard back from you. I hope all is well! Just wanted to see if you had a chance to review our offerings.",
          "If you need any additional information or clarification on Revolte, please don’t hesitate to reach out.",
        ],
        strong_conversion_attempt:
          "I would love to discuss how we can make Revolte a valuable part of Twellix’s growing tech stack. Could we set up a brief meeting next week?",
        value_reinforcement_message:
          "Remember, Revolte streamlines your development workflow, allowing you to focus on creating exceptional digital experiences without the hassle of managing multiple tools.",
      },
    },
  ],
};

const EmailTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const timeout = setTimeout(() => controller.abort(), 10000);

  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get("https://your-api-url.com/investors")
  //       if (!res.ok) throw new Error("Network response was not ok");
  //       const json = await res.json();

  //       // Map API data to table structure
  //       const tableData = json.map((item, idx) => ({
  //         key: idx + 1,
  //         name: item.name,
  //         email: item.email,
  //         response: item.response,
  //       }));

  //       setData(tableData);
  //     } catch (err) {
  //       console.error(err);
  //       setError(true);
  //       setData(sampleData); // fallback
  //     } finally {
  //       setLoading(false);
  //       clearTimeout(timeout);
  //     }
  //   };

  //   fetchData();

  //   return () => clearTimeout(timeout);
  // }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/emailInsight")
      .then((response) => {
        setData(sampleData?.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching investors:", error);
        setData(sampleData?.results);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="Investor">
        <p>Loading email insights...</p>
      </div>
    );
  }

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "client_name",
      key: "name",
      render: (text) => <Text strong>{text}</Text>,
    },
    {
      title: "Email",
      dataIndex: "client_email",
      key: "email",
      render: (text) => <Text copyable>{text}</Text>,
    },
    {
      title: "Final Score",
      dataIndex: ["lead_score_breakdown", "final_score"],
      key: "final_score",
      render: (score) => (
        <Tag color={score > 80 ? "green" : score > 60 ? "orange" : "volcano"}>
          {score}
        </Tag>
      ),
    },
    {
      title: "Lead Category",
      dataIndex: ["conversion_likelihood", "category"],
      key: "category",
      render: (cat) => (
        <Tag
          color={
            cat === "Hot Lead" ? "red" : cat === "Warm Lead" ? "orange" : "blue"
          }
        >
          {cat || "N/A"}
        </Tag>
      ),
    },
  ];

  return (
    <div style={{ padding: 20, marginLeft: "20rem" }} className="tableLayout">
      <h2 style={{ marginBottom: 20, color: "#1f2937", fontSize: "28px" }}>
        Turn Conversations into Insights — Track, Score, and Prioritize Your
        Leads
      </h2>

      {loading && (
        <Spin
          tip="Loading email insights..."
          style={{ marginTop: 50, display: "block", textAlign: "center" }}
        />
      )}

      {!loading && (
        <>
          <Table
            columns={columns}
            dataSource={data?.map((d, index) => ({ ...d, key: index + 1 }))}
            bordered
            expandable={{
              expandedRowRender: (record) => {
                const {
                  lead_score_breakdown,
                  conversion_likelihood,
                  lead_fit_analysis,
                  pitch_quality_evaluation,
                  next_steps,
                } = record;
                return (
                  <div style={{ background: "#f9f9f9", padding: 15 }}>
                    <h4>Lead Score Breakdown</h4>
                    <ul>
                      {Object.entries(lead_score_breakdown).map(([k, v]) => (
                        <li key={k}>
                          <strong>{k.replace(/_/g, " ")}:</strong> {v}
                        </li>
                      ))}
                    </ul>

                    <h4>Conversion Likelihood</h4>
                    <p>
                      <strong>Category:</strong>{" "}
                      {conversion_likelihood.category || "N/A"} <br />
                      <strong>Reason:</strong>{" "}
                      {conversion_likelihood.reason || "N/A"}
                    </p>

                    <h4>Lead Fit Analysis</h4>
                    <ul>
                      {Object.entries(lead_fit_analysis).map(([k, v]) => (
                        <li key={k}>
                          <strong>{k.replace(/_/g, " ")}:</strong> {v || "N/A"}
                        </li>
                      ))}
                    </ul>

                    <h4>Pitch Quality Evaluation</h4>
                    <ul>
                      {Object.entries(pitch_quality_evaluation).map(
                        ([k, v]) => (
                          <li key={k}>
                            <strong>{k.replace(/_/g, " ")}:</strong>{" "}
                            {v || "N/A"}
                          </li>
                        )
                      )}
                    </ul>

                    <h4>Next Steps</h4>
                    <p>
                      <strong>Follow-up Messages:</strong>{" "}
                      {next_steps.followup_messages.join(", ") || "N/A"}
                      <br />
                      <strong>Ghosting Nudges:</strong>{" "}
                      {next_steps.ghosting_nudges.join(", ") || "N/A"}
                      <br />
                      <strong>Strong Conversion Attempt:</strong>{" "}
                      {next_steps.strong_conversion_attempt || "N/A"}
                      <br />
                      <strong>Value Reinforcement Message:</strong>{" "}
                      {next_steps.value_reinforcement_message || "N/A"}
                    </p>
                  </div>
                );
              },
              rowExpandable: (record) => true,
            }}
            pagination={{ pageSize: 5 }}
            scroll={{ x: "max-content" }}
          />
        </>
      )}
    </div>
  );
};

export default EmailTable;

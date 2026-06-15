"use client";

import { useMemo, useState } from "react";

const tabs = [
  { id: "roadmap", label: "Roadmap" },
  { id: "tools", label: "Tools" },
  { id: "certs", label: "Certifications" },
  { id: "projects", label: "Projects" },
  { id: "channels", label: "YouTube" },
  { id: "resources", label: "Resources" },
];

const phases = [
  {
    title: "Foundation",
    subtitle: "Linux, networking, Git, Bash",
    points: ["CLI fluency", "Processes and permissions", "DNS, HTTP, SSH", "Git branching"],
    resources: [
      ["Linux Journey", "linuxjourney.com"],
      ["Learn Git Branching", "learngitbranching.js.org"],
      ["MIT Missing Semester", "missing.csail.mit.edu"],
    ],
  },
  {
    title: "Containers",
    subtitle: "Docker and Docker Compose",
    points: ["Images vs containers", "Dockerfile authoring", "Volumes and networking", "Multi-container apps"],
    resources: [
      ["Docker Docs", "docs.docker.com/get-started"],
      ["TechWorld with Nana", "YouTube"],
      ["DevOps Directive", "YouTube"],
    ],
  },
  {
    title: "CI/CD",
    subtitle: "GitHub Actions and Jenkins",
    points: ["Build and test automation", "Pipeline triggers", "Artifact publishing", "Deployment gates"],
    resources: [
      ["GitHub Actions Docs", "docs.github.com/actions"],
      ["KodeKloud Jenkins", "YouTube"],
    ],
  },
  {
    title: "Kubernetes",
    subtitle: "Orchestration and cluster operations",
    points: ["Pods, Deployments, Services", "Helm and Ingress", "Helm and manifests", "Autoscaling and rollouts"],
    resources: [
      ["Kubernetes Docs", "kubernetes.io/docs/tutorials"],
      ["Killercoda", "killercoda.com/kubernetes"],
    ],
  },
  {
    title: "Cloud + IaC",
    subtitle: "AWS, Terraform, Ansible",
    points: ["VPC, EC2, S3, RDS", "Terraform modules", "Configuration management", "Cloud security basics"],
    resources: [
      ["AWS Free Tier", "aws.amazon.com/free"],
      ["Terraform Tutorials", "developer.hashicorp.com/terraform/tutorials"],
      ["TechiesCamp DevOps Projects", "GitHub"],
    ],
  },
  {
    title: "Observability",
    subtitle: "Monitoring, logging, and incident readiness",
    points: ["Prometheus and Grafana", "Alertmanager", "Centralized logs", "SLO thinking"],
    resources: [
      ["Prometheus Docs", "prometheus.io/docs"],
      ["Grafana Docs", "grafana.com/docs"],
    ],
  },
];

const tools = [
  ["Linux", "Shell, permissions, services"],
  ["Docker", "Container build and runtime"],
  ["Docker Compose", "Multi-container local dev"],
  ["GitHub Actions", "Modern CI/CD"],
  ["Jenkins", "Enterprise CI/CD"],
  ["Kubernetes", "Orchestration standard"],
  ["Terraform", "Infrastructure as code"],
  ["Ansible", "Config management"],
  ["AWS", "Primary cloud choice"],
  ["GCP / Azure", "Secondary cloud options"],
  ["Prometheus", "Metrics and alerting"],
  ["Grafana", "Dashboards and observability"],
];

const certs = [
  ["AWS Cloud Practitioner", "Start with cloud vocabulary and architecture basics."],
  ["CKA", "Hands-on Kubernetes credential with strong market value."],
  ["Terraform Associate", "Validates IaC skills and Terraform workflow."],
  ["AWS DevOps Professional", "High-value cloud DevOps certification."],
  ["CKAD / CKS", "Use after you are strong on Kubernetes fundamentals."],
  ["GCP Professional DevOps Engineer", "Good second-cloud milestone."],
];

const projects = [
  ["Dockerize a web app", "Build an image, run locally, push to Docker Hub, and add Compose."],
  ["CI/CD pipeline", "Run tests on push, build on merge, and publish an image automatically."],
  ["EKS deployment", "Deploy containers to Kubernetes with Ingress and autoscaling."],
  ["Terraform infra", "Provision VPC, compute, database, and storage through code."],
  ["Monitoring stack", "Ship Prometheus, Grafana, and alerting on Kubernetes."],
  ["End-to-end platform", "Combine repo, CI, registry, IaC, deploy, and observability."],
];

const channels = [
  ["NetworkChuck", "Good entry point for Linux and networking"],
  ["TechWorld with Nana", "Structured Docker, Kubernetes, and DevOps courses"],
  ["KodeKloud", "Hands-on labs and certification prep"],
  ["DevOps Directive", "Production-focused free courses"],
  ["Anton Putra", "AWS and Terraform deep dives"],
  ["Harkirat Singh", "India-focused roadmap and interview content"],
];

const resources = [
  ["roadmap.sh/devops", "Canonical roadmap reference"],
  ["Kubernetes Docs", "Authoritative K8s tutorials"],
  ["Docker Docs", "Authoritative Docker reference"],
  ["Terraform Docs", "Official IaC docs"],
  ["Killercoda", "Free browser labs"],
  ["Play with Docker", "Quick container labs"],
  ["Play with Kubernetes", "Quick cluster labs"],
  ["AWS Free Tier", "Use real cloud when possible"],
  ["A Cloud Guru", "Cloud learning and lab platform"],
  ["CNCF", "Cloud-native ecosystem source"],
];

function Card({ title, body, meta }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{body}</p>
      {meta ? <span>{meta}</span> : null}
    </article>
  );
}

export default function Home() {
  const [active, setActive] = useState("roadmap");
  const activeTab = useMemo(() => tabs.find((tab) => tab.id === active), [active]);

  return (
    <main className="guide-shell">
      <header className="topbar">
        <div className="brand">// devops.guide</div>
        <nav className="tabs" aria-label="Guide sections">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={tab.id === active ? "tab active" : "tab"}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      {active === "roadmap" ? (
        <section className="page">
          <div className="hero">
            <p className="eyebrow">// Universal Starter Guide · 2025-2026</p>
            <h1>
              Become a <span>DevOps Engineer</span>
              <br />
              from Scratch
            </h1>
            <p className="lede">
              A phase-by-phase roadmap covering what to learn, what to build, which tools to master,
              and which certifications matter.
            </p>
            <div className="stats">
              <div><strong>6</strong><span>Phases</span></div>
              <div><strong>6-12mo</strong><span>To job-ready</span></div>
              <div><strong>₹10-25L</strong><span>India avg salary</span></div>
              <div><strong>75%+</strong><span>IT hiring relevance</span></div>
            </div>
          </div>

          <div className="notice">
            <strong>How to use this guide:</strong> Work phase by phase. Each phase builds on the last,
            and each one is meant to turn into a portfolio artifact.
          </div>

          <div className="phase-grid">
            {phases.map((phase, index) => (
              <article key={phase.title} className="phase-card">
                <div className="phase-head">
                  <span>Phase {String(index + 1).padStart(2, "0")}</span>
                  <h2>{phase.title}</h2>
                  <em>{phase.subtitle}</em>
                </div>
                <ul>
                  {phase.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="resource-list">
                  {phase.resources.map(([name, label]) => (
                    <div key={name} className="resource-chip">
                      <strong>{name}</strong>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {active === "tools" ? (
        <section className="page">
          <h2 className="section-title">{activeTab.label}</h2>
          <div className="grid-cards">
            {tools.map(([title, body]) => (
              <Card key={title} title={title} body={body} />
            ))}
          </div>
        </section>
      ) : null}

      {active === "certs" ? (
        <section className="page">
          <h2 className="section-title">{activeTab.label}</h2>
          <div className="grid-cards">
            {certs.map(([title, body]) => (
              <Card key={title} title={title} body={body} />
            ))}
          </div>
        </section>
      ) : null}

      {active === "projects" ? (
        <section className="page">
          <h2 className="section-title">{activeTab.label}</h2>
          <div className="grid-cards">
            {projects.map(([title, body]) => (
              <Card key={title} title={title} body={body} />
            ))}
          </div>
        </section>
      ) : null}

      {active === "channels" ? (
        <section className="page">
          <h2 className="section-title">{activeTab.label}</h2>
          <div className="grid-cards">
            {channels.map(([title, body]) => (
              <Card key={title} title={title} body={body} />
            ))}
          </div>
        </section>
      ) : null}

      {active === "resources" ? (
        <section className="page">
          <h2 className="section-title">{activeTab.label}</h2>
          <div className="grid-cards">
            {resources.map(([title, body]) => (
              <Card key={title} title={title} body={body} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}

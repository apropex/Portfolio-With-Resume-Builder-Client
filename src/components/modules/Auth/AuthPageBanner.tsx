//

import { Briefcase, FileText, LayoutDashboard, ShieldCheck } from "lucide-react";

export default function AuthPageBanner() {
  return (
    <div className="brand-side relative m-4 rounded-3xl bg-[url('https://cdn.midjourney.com/299f94f9-ecb9-4b26-bead-010b8d8b01d9/0_0.webp?w=800&q=80')] bg-cover p-12 text-white">
      <div>
        <div className="mb-12 text-lg font-semibold uppercase">PortfolioPro</div>
        <h1 className="mb-4 text-3xl font-medium">
          Showcase, Build, and Manage Your Professional Journey
        </h1>
        <p className="mb-12 text-xl opacity-80">
          Join creators and professionals using PortfolioPro to display their work, manage
          blogs, and craft stunning resumes
        </p>

        <div className="space-y-6">
          {[
            {
              icon: <ShieldCheck size={16} />,
              title: "Secure Authentication",
              desc: "Safe login system to manage your portfolio with ease",
            },
            {
              icon: <LayoutDashboard size={16} />,
              title: "Personal Dashboard",
              desc: "Centralized hub to manage blogs and projects",
            },
            {
              icon: <FileText size={16} />,
              title: "Resume Builder",
              desc: "Create professional resumes tailored to your skills",
            },
            {
              icon: <Briefcase size={16} />,
              title: "Projects & Blogs",
              desc: "Showcase your work and share insights with dynamic content",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="feature-item animate-fadeInUp flex items-center"
              style={{ animationDelay: `${0.2 * (i + 1)}s` }}
            >
              <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-sm">
                {icon}
              </div>
              <div>
                <div className="font-semibold">{title}</div>
                <div className="text-sm opacity-70">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

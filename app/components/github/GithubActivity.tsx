"use client";

import { githubConfig } from "@/app/config/githubConfig";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import Title from "../shared/Title";
import { motion } from "framer-motion";

/* =============================
   Dynamic Calendar with Loader
============================= */
const ActivityCalendar = dynamic(
  () => import("react-activity-calendar").then((mod) => mod.ActivityCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="relative h-[135px] overflow-hidden rounded-lg bg-muted">
        <div
          className="absolute inset-0 -translate-x-full animate-shimmer 
    bg-gradient-to-r 
    from-transparent 
    via-white/60 dark:via-white/10 
    to-transparent
    blur-sm
  "
        />
      </div>
    ),
  }
);

/* =============================
   Types
============================= */
type ContributionItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type GitHubContributionResponse = {
  date: string;
  contributionCount: number;
  contributionLevel:
    | "NONE"
    | "FIRST_QUARTILE"
    | "SECOND_QUARTILE"
    | "THIRD_QUARTILE"
    | "FOURTH_QUARTILE";
};

/* =============================
   Helpers
============================= */
function filterLastYear(contributions: ContributionItem[]): ContributionItem[] {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  return contributions.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate >= oneYearAgo;
  });
}

/* =============================
   Component
============================= */
export default function GithubActivity() {
  const [contributions, setContributions] = useState<ContributionItem[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const response = await fetch(
          `${githubConfig.apiUrl}/${githubConfig.username}.json`
        );
        const data: { contributions?: unknown[] } = await response.json();

        if (data?.contributions && Array.isArray(data.contributions)) {
          const flattenedContributions = data.contributions.flat();

          const contributionLevelMap = {
            NONE: 0,
            FIRST_QUARTILE: 1,
            SECOND_QUARTILE: 2,
            THIRD_QUARTILE: 3,
            FOURTH_QUARTILE: 4,
          };

          const validContributions = flattenedContributions
            .filter(
              (item: unknown): item is GitHubContributionResponse =>
                typeof item === "object" &&
                item !== null &&
                "date" in item &&
                "contributionCount" in item &&
                "contributionLevel" in item
            )
            .map((item) => ({
              date: String(item.date),
              count: Number(item.contributionCount || 0),
              level: (contributionLevelMap[
                item.contributionLevel as keyof typeof contributionLevelMap
              ] || 0) as ContributionItem["level"],
            }));

          if (validContributions.length > 0) {
            const total = validContributions.reduce(
              (sum, item) => sum + item.count,
              0
            );
            setTotalContributions(total);

            const filtered = filterLastYear(validContributions);
            setContributions(filtered);
          } else {
            setHasError(true);
          }
        } else {
          setHasError(true);
        }
      } catch (error) {
        console.error("Failed to fetch GitHub contributions:", error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      viewport={{ once: true }}
      className="space-y-3"
    >
      {/* Header */}
      <Title upperText="Featured" lowerText="Github Activity" />

      <p className="text-[15px] text-muted-foreground">
        <b>ubaidur</b>&apos;s {githubConfig.subtitle}
      </p>

      {/* Content */}
      {isLoading ? (
        /* API Loading */
        <div className="flex items-center justify-center py-16">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              {githubConfig.loadingState.description}
            </p>
          </div>
        </div>
      ) : hasError || contributions.length === 0 ? (
        /* Error State */
        <div className="p-8 text-center text-muted-foreground border-2 border-dashed border-border rounded-xl">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
            <Github className="w-8 h-8" />
          </div>
          <p className="font-medium mb-2">{githubConfig.errorState.title}</p>
          <p className="text-sm mb-4">{githubConfig.errorState.description}</p>
          <Button variant="outline" asChild>
            <Link
              href={`https://github.com/${githubConfig.username}`}
              className="inline-flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              {githubConfig.errorState.buttonText}
            </Link>
          </Button>
        </div>
      ) : (
        /* Calendar (has its own loader via dynamic import) */
        <div className="relative overflow-hidden">
          <div className="w-full overflow-x-auto">
            <ActivityCalendar
              data={contributions}
              blockSize={10.73}
              blockMargin={2.9}
              fontSize={githubConfig.fontSize}
              colorScheme={theme === "dark" ? "dark" : "light"}
              maxLevel={githubConfig.maxLevel}
              theme={githubConfig.theme}
              labels={{
                months: githubConfig.months,
                weekdays: githubConfig.weekdays,
                totalCount: githubConfig.totalCountLabel,
              }}
              style={{
                color: "rgb(139, 148, 158)",
              }}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  FaDiscord,
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const SocialIcons = () => {
  const socialLinks = [
    {
      id: 1,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ubaidur-rahman01/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: FaLinkedin,
    },
    {
      id: 2,
      name: "Twitter",
      url: "https://x.com/UbaidurRah24983?t=dXrrCouR6TD9CaqpfD2DGQ&s=08",
      icon: FaTwitter,
    },
    {
      id: 3,
      name: "GitHub",
      url: "https://github.com/noob-ubaid",
      icon: FaGithub,
    },
    {
      id: 4,
      name: "Facebook",
      url: "https://www.facebook.com/ubaidur.rahman.881781?rdid=KvGRqC7VQ5zQm27c&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FXDbMmv5i%2F#",
      icon: FaFacebookSquare,
    },
    {
      id: 5,
      name: "Discord",
      url: "https://discord.com/users/9jm6f99C",
      icon: FaDiscord,
    },
  ];
  return (
    <div className="flex items-center gap-3 mt-6">
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        return (
          <div key={link.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href={link.url} target="_blank">
                  {" "}
                  <IconComponent size={24} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-medium text-xs">{link.name}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        );
      })}
    </div>
  );
};

export default SocialIcons;

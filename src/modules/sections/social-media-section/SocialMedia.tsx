import React from "react";
import ShareIcon from "@mui/icons-material/Share"
import SocialCard from "../../general/components/social-card/SocialCard";
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import GeneralCard from "../../general/components/general-card/GeneralCard";
import InstagramIcon from '@mui/icons-material/Instagram';
import { OwnerData } from "@modules/general/libraries/owner-data";

const SocialMedia = ({
    ownerData
}:{
    ownerData: OwnerData
}) => {
  return (
    <GeneralCard title="social media" icon={<ShareIcon />}>
      <SocialCard title={ownerData.PHONE} icon={<WhatsAppIcon />} />
      <SocialCard title={ownerData.INSTAGRAM} icon={<InstagramIcon />} />
      <SocialCard title={ownerData.LINKEDIN} icon={<LinkedInIcon />} />
      <SocialCard title={ownerData.TELEGRAM} icon={<TelegramIcon />} />
      <SocialCard title={ownerData.TWITTER} icon={<TwitterIcon />} />
    </GeneralCard>
  );
};

export default SocialMedia;

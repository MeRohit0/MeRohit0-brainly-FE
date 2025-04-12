import { DeleteIcon } from "../icons/DeleteIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";

interface CardProps {
  title: string;
  type: "youtube" | "twitter";
  link: string;
}

export const Card = ({ title, type, link }: CardProps) => {
  return (
    <div>
      <div className="border border-gray-300/50 p-2 min-w-72 rounded-md bg-white">
        <div className="flex justify-between p-2 items-center">
          <div className="flex items-center">
            <div className="text-gray-600 pr-2.5">
              {type=== "youtube" && <YoutubeIcon />}
              {type=== "twitter" && <TwitterIcon />}
            </div>
            {title}
          </div>
          <div className="flex items-center ">
            <div className="text-gray-600 pr-2.5">
              <a href={link} target="_blank">
                <ShareIcon />
              </a>
            </div>
            <div className="text-gray-600 pr-2.5">
              <DeleteIcon />
            </div>
          </div>
        </div>
        <div className="p-2">
          {type === "youtube" && (
            <iframe
              className="w-full"
              src={link.replace("watch", "embed").replace("?v=", "/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen={true}
            ></iframe>
          )}

          {type === "twitter" && (
            <div className="">
              <blockquote className="twitter-tweet">
                <a href={link.replace("x.com", "twitter.com")}></a>
              </blockquote>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

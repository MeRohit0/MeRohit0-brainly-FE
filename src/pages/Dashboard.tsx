import { SideCard } from "../components/Sidecard";
import { useState } from "react";
import { AddContentModel } from "../components/AddContentModel";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { useContent } from "../hooks/useContent";
import { ShareButton } from "../components/ShareButton";

export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  // useContent hook - fetch data from backend
  const {content , refresh} = useContent();
  return (
    <div className="flex">
      <div className="min-w-1/6">
        <SideCard />
      </div>
      <div className="min-w-5/6">
        <div className="bg-[#f9fbfc] p-3 h-screen">
          {/* add model view */}
          <div className="flex justify-between items-center">
            <div className="text-3xl p-5">All Notes</div>
            <div className="flex justify-end">
              <AddContentModel
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                refresh={refresh}
              />
              <Button
                variant="primary"
                text="Add Content"
                onClick={() => setIsOpen(true)}
                startIcon={<PlusIcon />}
                pointer={true}
              />
              <Button
                variant="secondary"
                text="Share Brain"
                startIcon={<ShareIcon />}
                pointer={true}
                onClick={ShareButton}
              />
            </div>
          </div>
          {/* card data render here */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-2.5">
            {content.map(({ link, type, title  }) => {
              return <Card title={title} type={type} link={link} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};


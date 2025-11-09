import Chef from "../assets/images/chef-claude-icon.png";

export const Logo = () => {
  return (
    <div className="container w-full bg-gray-900 shadow-md flex justify-center items-center py-4">
      <div className="flex items-center gap-4">
        <img src={Chef} alt="Chef logo" className="w-14 h-14 object-contain" />
        <h1 className="text-3xl font-bold text-green-400">Chef Claude</h1>
      </div>
    </div>
  );
};

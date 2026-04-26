import React from "react";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  Label,
  ResponsiveContainer,
  Pie,
  PieChart,
  Sector,
  Cell,
} from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "black",
];
const RADIAN = Math.PI / 180;
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  const { data: orderData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      console.log("API data:", res.data);
      return res.data;
    },
  });

  const chartData = orderData.map((item) => ({
    category: item.category,
    quantity: item.quantity,
  }));

  const paiData = orderData.map((item) => ({
    name: item.category,
    value: item.revenue,
  }));
  /** make this custom ber charts start */
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height} C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y} C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height} Z`;
  };

  const TriangleBar = (props) => {
    const { x, y, width, height, index } = props;
    const color = colors[index % colors.length];
    return (
      <path
        strokeWidth={props.isActive ? 5 : 0}
        d={getPath(Number(x), Number(y), Number(width), Number(height))}
        stroke={color}
        fill={color}
        style={{ transition: "stroke-width 0.3s ease-out" }}
      />
    );
  };

  const CustomColorLabel = (props) => {
    const fill = colors[(props.index ?? 0) % colors.length];
    return <Label {...props} fill={fill} />;
  };
  /** make this custom ber charts end */
  /** Pie Chart start */
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    if (cx == null || cy == null || innerRadius == null || outerRadius == null)
      return null;

    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const ncx = Number(cx);
    const ncy = Number(cy);
    const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
    const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > ncx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${((percent ?? 1) * 100).toFixed(0)}%`}
      </text>
    );
  };

  const MyCustomPie = (props) => {
    return <Sector {...props} fill={COLORS[props.index % COLORS.length]} />;
  };
  /** Pie Chart end */

  return (
    <div>
      <div className="container-2 mb-20">
        <h2 className="block mb-16">
          Hi Welcome
          {user?.displayName ? user.displayName : " Back?"}
        </h2>
        <div className="w-full">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3 shadow-md bg-nu102 shadow-nu40 px-4 py-4 rounded-lg">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="stat-title text-nu60 py-2 text-[20px]">Revenue</h3>
              <div className="stat-value text-nu60 py-2 text-[24px]">
                ${stats?.revenue}
              </div>
              <div className="stat-desc text-nu60 py-2 text-[20px]">
                Jan 1st - Feb 1st
              </div>
            </div>
            <div className="col-span-3 shadow-md bg-nu102 shadow-nu40 px-4 py-4 rounded-lg">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <h3 className="stat-title text-nu60 py-2 text-[20px]">
                Customers
              </h3>
              <div className="stat-value text-nu60 py-2 text-[24px]">
                {stats?.users}
              </div>
              <div className="stat-desc text-nu60 py-2 text-[20px]">
                ↗︎ 400 (22%)
              </div>
            </div>
            <div className="col-span-3 shadow-md bg-nu102 shadow-nu40 px-4 py-4 rounded-lg">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <h3 className="stat-title text-nu60 py-2 text-[20px]">
                Products
              </h3>
              <div className="stat-value text-nu60 py-2 text-[24px]">
                {stats?.menuItems}
              </div>
              <div className="stat-desc text-nu60 py-2 text-[20px]">
                ↘︎ 90 (14%)
              </div>
            </div>
            <div className="col-span-3 shadow-md bg-nu102 shadow-nu40 px-4 py-4 rounded-lg">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <h3 className="stat-title text-nu60 py-2 text-[20px]">Orders</h3>
              <div className="stat-value text-nu60 py-2 text-[24px]">
                {stats?.orders}
              </div>
              <div className="stat-desc text-nu60 py-2 text-[20px]">
                ↘︎ 90 (14%)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-2">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-6">
            <ResponsiveContainer width="100%" aspect={1.618}>
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip cursor={{ fillOpacity: 0.5 }} />
                <XAxis dataKey="category" />
                <YAxis />
                <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />}>
                  <LabelList content={CustomColorLabel} position="top" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            ss
          </div>
          <div className="col-span-6">
            <ResponsiveContainer width="80%" aspect={1}>
              <PieChart>
                <Pie
                  data={paiData}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  fill="#8884d8"
                  dataKey="value"
                  shape={<MyCustomPie />}
                >
                  {paiData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;

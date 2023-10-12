import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import "./All.css";
import { Link } from "react-router-dom";

export function ServiesCard() {
  return (
    <div className="my-20 xl:max-w-screen-xl xl:mx-auto mx-5 customFont">
      <h1 className="text-center text-5xl font-bold mb-5">Services</h1>
      <p className="text-center text-base sm:text-lg md:text:xl mb-10">
        It&apos;s simple. You have an event to plan and we have the solutions
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
        {/* 1 */}
        <div data-aos="fade-up" data-aos-duration="1000">
          <Card className="w-full max-w-[26rem] shadow-lg">
            <CardHeader floated={false} color="blue-gray">
              <img
                src="https://i.ibb.co/LSkYmtv/yullina-d-y4-Jtxl-Vsw-BY-unsplash.jpg"
                alt=""
              />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-between">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-bold"
                >
                  Franchise
                </Typography>
                <Typography
                  color="blue-gray"
                  className="flex items-center gap-1.5 font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  5.0
                </Typography>
              </div>
              <Typography color="gray">
                Celebrate our franchise&apos;s birthday with a spectacular event
                on 02 june! Join us at Dhaka for a day filled with fun,
                gratitude, and special offers.
              </Typography>
            </CardBody>

            <Link to={"/franshise"}>
              <CardFooter className="pt-3">
                <Button size="lg" fullWidth={true}>
                  Details
                </Button>
              </CardFooter>
            </Link>
          </Card>
        </div>
        {/* 2 */}
        <div data-aos="fade-up" data-aos-duration="1500">
          <Card className="w-full max-w-[26rem] shadow-lg">
            <CardHeader floated={false} color="blue-gray">
              <img
                src="https://i.ibb.co/ZxLJccF/gaelle-marcel-vrk-SVp-Owchk-unsplash.jpg"
                alt="ui/ux review check"
              />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-between">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-bold"
                >
                  Birthday Parties
                </Typography>
                <Typography
                  color="blue-gray"
                  className="flex items-center gap-1.5 font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  5.0
                </Typography>
              </div>
              <Typography color="gray">
                Join us for an unforgettable birthday party extravaganza on 02
                june at dhaka! We have curated a day of non-stop excitement and
                joy to make...
              </Typography>
            </CardBody>
            <Link to={"/birthdayParties"}>
              <CardFooter className="pt-3">
                <Button size="lg" fullWidth={true}>
                  Details
                </Button>
              </CardFooter>
            </Link>
          </Card>
        </div>
        {/* 3 */}
        <div data-aos="fade-up" data-aos-duration="2000">
          <Card className="w-full max-w-[26rem] shadow-lg">
            <CardHeader floated={false} color="blue-gray">
              <img
                src="https://i.ibb.co/VBnLqHZ/hoyoun-lee-V18y0p-S-ZPg-unsplash.jpg"
                alt="ui/ux review check"
              />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-between">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-bold"
                >
                  Party Pets
                </Typography>
                <Typography
                  color="blue-gray"
                  className="flex items-center gap-1.5 font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  5.0
                </Typography>
              </div>
              <Typography color="gray">
                Party Pets is a whimsical and imaginative concept that involves
                incorporating animals into a celebratory event, adding a unique
                and entertaining...
              </Typography>
            </CardBody>
            <Link to={"/partypets"}>
              <CardFooter className="pt-3">
                <Button size="lg" fullWidth={true}>
                  Details
                </Button>
              </CardFooter>
            </Link>
          </Card>
        </div>
        {/* 4 */}
        <div data-aos="fade-up" data-aos-duration="2500">
          <Card className="w-full max-w-[26rem] shadow-lg">
            <CardHeader floated={false} color="blue-gray">
              <img
                src="https://i.ibb.co/C6WpNwz/chuttersnap-a-En-H4h-J-Mrs-unsplash.jpg"
                alt="ui/ux review check"
              />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-between">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-bold"
                >
                  Corporate
                </Typography>
                <Typography
                  color="blue-gray"
                  className="flex items-center gap-1.5 font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  5.0
                </Typography>
              </div>
              <Typography color="gray">
                A corporate party is a social event organized by a company or
                organization to celebrate achievements, milestones, or holidays,
                and to...
              </Typography>
            </CardBody>
            <Link to={"/corporate"}>
              <CardFooter className="pt-3">
                <Button size="lg" fullWidth={true}>
                  Details
                </Button>
              </CardFooter>
            </Link>
          </Card>
        </div>
        {/* 5 */}
        <div data-aos="fade-up" data-aos-duration="2700">
          <Card className="w-full max-w-[26rem] shadow-lg">
            <CardHeader floated={false} color="blue-gray">
              <img
                src="https://i.ibb.co/nzkTYD2/ian-schneider-PAyk-Yb-8-Er8-unsplash.jpg"
                alt="ui/ux review check"
              />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-between">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-bold"
                >
                  Celebrations
                </Typography>
                <Typography
                  color="blue-gray"
                  className="flex items-center gap-1.5 font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  5.0
                </Typography>
              </div>
              <Typography color="gray">
                Celebrations are joyous and festive occasions marked by
                gatherings, festivities, and expressions of happiness. They
                serve as...
              </Typography>
            </CardBody>
            <Link to={"/celebration"}>
              <CardFooter className="pt-3">
                <Button size="lg" fullWidth={true}>
                  Details
                </Button>
              </CardFooter>
            </Link>
          </Card>
        </div>
        {/* 6 */}
        <div data-aos="fade-up" data-aos-duration="3000">
          <Card className="w-full max-w-[26rem] shadow-lg">
            <CardHeader floated={false} color="blue-gray">
              <img
                src="https://i.ibb.co/0nBSj1w/adi-goldstein-Hli3-R6-LKibo-unsplash.jpg"
                alt="ui/ux review check"
              />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-between">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-bold"
                >
                  Holiday Parties
                </Typography>
                <Typography
                  color="blue-gray"
                  className="flex items-center gap-1.5 font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  5.0
                </Typography>
              </div>
              <Typography color="gray">
                Holiday parties are festive gatherings held to commemorate and
                celebrate specific holidays or seasonal occasions. These events
                are...
              </Typography>
            </CardBody>
            <Link to={"/holidayparty"}>
              <CardFooter className="pt-3">
                <Button size="lg" fullWidth={true}>
                  Details
                </Button>
              </CardFooter>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect, useRef } from "react";
import { Instagram as InstagramIcon, Image, Video } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Instagram = () => {
  const [activeTab, setActiveTab] = useState("post");
  const [loadingStates, setLoadingStates] = useState({
    post1: true,
    post2: true,
    reel1: true,
    reel2: true,
  });
  const scriptLoaded = useRef(false);

  // Function to update loading state for specific post/reel
  const updateLoadingState = (key: string, value: boolean) => {
    setLoadingStates((prev) => ({ ...prev, [key]: value }));
  };

  // Function to load Instagram embed script
  const loadInstagramEmbed = () => {
    if (scriptLoaded.current) {
      // If script is already loaded, just process embeds
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;

    script.onload = () => {
      scriptLoaded.current = true;
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    document.body.appendChild(script);
  };

  // Process embeds when tab changes or component mounts
  useEffect(() => {
    // Set initial loading states when changing tabs
    if (activeTab === "post") {
      updateLoadingState("post1", true);
      updateLoadingState("post2", true);
    } else {
      updateLoadingState("reel1", true);
      updateLoadingState("reel2", true);
    }

    // Load the embed script and process
    loadInstagramEmbed();

    // Add a fallback in case the embed.js doesn't trigger the load event
    const fallbackTimer = setTimeout(() => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
      updateLoadingState("post1", false);
      updateLoadingState("post2", false);
      updateLoadingState("reel1", false);
      updateLoadingState("reel2", false);
    }, 3000);

    return () => {
      clearTimeout(fallbackTimer);
    };
  }, [activeTab]);

  // Handler for when embed loads
  const handleEmbedLoad = (key: string) => {
    updateLoadingState(key, false);
  };

  return (
    <section
      id="instagram"
      className="py-20 bg-gray-950 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full opacity-30 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/5 rounded-full opacity-20 blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <InstagramIcon size={24} className="text-purple-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Follow Us On Instagram
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with our latest activities, student achievements, and
            upcoming events.
          </p>

          <div className="mt-4 flex items-center justify-center">
            <a
              href="https://www.instagram.com/we_ishine"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span className="font-medium">@we_ishine</span>
            </a>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs
            defaultValue="post"
            className="w-full"
            onValueChange={(value) => setActiveTab(value)}
          >
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-gray-800 border border-gray-700">
              <TabsTrigger
                value="post"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                <div className="flex items-center gap-2">
                  <Image size={18} />
                  <span>Post</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="reel"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                <div className="flex items-center gap-2">
                  <Video size={18} />
                  <span>Reel</span>
                </div>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="post" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Instagram Post 1 */}
                <Card className="bg-gray-900 shadow-md overflow-hidden rounded-lg border-gray-800">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-800">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center">
                        <InstagramIcon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-white">
                          we_ishine
                        </p>
                        <p className="text-xs text-gray-400">
                          Parent Testimonials
                        </p>
                      </div>
                      <a
                        href="https://www.instagram.com/we_ishine"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto bg-blue-600 text-white text-xs py-1 px-3 rounded-full hover:bg-blue-700 transition-colors"
                      >
                        View profile
                      </a>
                    </div>
                    <div className="aspect-square w-full bg-gray-800 relative">
                      {loadingStates.post1 && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 z-10">
                          <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                          <p className="text-gray-400 text-sm">
                            Loading post...
                          </p>
                        </div>
                      )}
                      <blockquote
                        className="instagram-media"
                        data-instgrm-permalink="https://www.instagram.com/p/DJL7FhaP7A9/"
                        data-instgrm-version="14"
                        style={{
                          background: "#1F2937",
                          border: "1px solid #374151",
                          borderRadius: "3px",
                          boxShadow:
                            "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                          margin: "0",
                          padding: "0",
                          width: "100%",
                          height: "100%",
                        }}
                        onLoad={() => handleEmbedLoad("post1")}
                      >
                        <div
                          style={{
                            padding: "16px",
                            color: "#E5E7EB",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <a
                            href="https://www.instagram.com/p/DJL7FhaP7A9/"
                            style={{
                              background: "#1F2937",
                              lineHeight: "0",
                              padding: "0",
                              textAlign: "center",
                              textDecoration: "none",
                              width: "100%",
                              color: "#E5E7EB",
                            }}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View this post on Instagram
                          </a>
                        </div>
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>

                {/* Instagram Post 2 */}
                <Card className="bg-gray-900 shadow-md overflow-hidden rounded-lg border-gray-800">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-800">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center">
                        <InstagramIcon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-white">
                          we_ishine
                        </p>
                        <p className="text-xs text-gray-400">
                          Holistic Growth at iShine
                        </p>
                      </div>
                      <a
                        href="https://www.instagram.com/we_ishine"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto bg-blue-600 text-white text-xs py-1 px-3 rounded-full hover:bg-blue-700 transition-colors"
                      >
                        View profile
                      </a>
                    </div>
                    <div className="aspect-square w-full bg-gray-800 relative">
                      {loadingStates.post2 && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 z-10">
                          <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                          <p className="text-gray-400 text-sm">
                            Loading post...
                          </p>
                        </div>
                      )}
                      <blockquote
                        className="instagram-media"
                        data-instgrm-permalink="https://www.instagram.com/p/DJL7FhaP7A9/"
                        data-instgrm-version="14"
                        style={{
                          background: "#1F2937",
                          border: "1px solid #374151",
                          borderRadius: "3px",
                          boxShadow:
                            "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                          margin: "0",
                          padding: "0",
                          width: "100%",
                          height: "100%",
                        }}
                        onLoad={() => handleEmbedLoad("post2")}
                      >
                        <div
                          style={{
                            padding: "16px",
                            color: "#E5E7EB",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <a
                            href="https://www.instagram.com/p/DJL7FhaP7A9/"
                            style={{
                              background: "#1F2937",
                              lineHeight: "0",
                              padding: "0",
                              textAlign: "center",
                              textDecoration: "none",
                              width: "100%",
                              color: "#E5E7EB",
                            }}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View this post on Instagram
                          </a>
                        </div>
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reel" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Instagram Reel 1 */}
                <Card className="bg-gray-900 shadow-md overflow-hidden rounded-lg border-gray-800">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-800">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center">
                        <InstagramIcon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-white">
                          we_ishine
                        </p>
                        <p className="text-xs text-gray-400">
                          Testimonial from Mrs. Jyoti
                        </p>
                      </div>
                      <a
                        href="https://www.instagram.com/we_ishine"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto bg-blue-600 text-white text-xs py-1 px-3 rounded-full hover:bg-blue-700 transition-colors"
                      >
                        View profile
                      </a>
                    </div>
                    <div className="aspect-square w-full bg-gray-800 relative">
                      {loadingStates.reel1 && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 z-10">
                          <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                          <p className="text-gray-400 text-sm">
                            Loading reel...
                          </p>
                        </div>
                      )}
                      <blockquote
                        className="instagram-media"
                        data-instgrm-permalink="https://www.instagram.com/reel/C_epfmsPBbb/"
                        data-instgrm-version="14"
                        style={{
                          background: "#1F2937",
                          border: "1px solid #374151",
                          borderRadius: "3px",
                          boxShadow:
                            "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                          margin: "0",
                          padding: "0",
                          width: "100%",
                          height: "100%",
                        }}
                        onLoad={() => handleEmbedLoad("reel1")}
                      >
                        <div
                          style={{
                            padding: "16px",
                            color: "#E5E7EB",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <a
                            href="https://www.instagram.com/reel/C_epfmsPBbb/"
                            style={{
                              background: "#1F2937",
                              lineHeight: "0",
                              padding: "0",
                              textAlign: "center",
                              textDecoration: "none",
                              width: "100%",
                              color: "#E5E7EB",
                            }}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View this reel on Instagram
                          </a>
                        </div>
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>

                {/* Instagram Reel 2 */}
                <Card className="bg-gray-900 shadow-md overflow-hidden rounded-lg border-gray-800">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-800">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center">
                        <InstagramIcon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-white">
                          we_ishine
                        </p>
                        <p className="text-xs text-gray-400">
                          Student Achievements
                        </p>
                      </div>
                      <a
                        href="https://www.instagram.com/we_ishine"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto bg-blue-600 text-white text-xs py-1 px-3 rounded-full hover:bg-blue-700 transition-colors"
                      >
                        View profile
                      </a>
                    </div>
                    <div className="aspect-square w-full bg-gray-800 relative">
                      {loadingStates.reel2 && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 z-10">
                          <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                          <p className="text-gray-400 text-sm">
                            Loading reel...
                          </p>
                        </div>
                      )}
                      <blockquote
                        className="instagram-media"
                        data-instgrm-permalink="https://www.instagram.com/reel/C8ZFuMlIFiQ/"
                        data-instgrm-version="14"
                        style={{
                          background: "#1F2937",
                          border: "1px solid #374151",
                          borderRadius: "3px",
                          boxShadow:
                            "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                          margin: "0",
                          padding: "0",
                          width: "100%",
                          height: "100%",
                        }}
                        onLoad={() => handleEmbedLoad("reel2")}
                      >
                        <div
                          style={{
                            padding: "16px",
                            color: "#E5E7EB",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <a
                            href="https://www.instagram.com/reel/C8ZFuMlIFiQ/"
                            style={{
                              background: "#1F2937",
                              lineHeight: "0",
                              padding: "0",
                              textAlign: "center",
                              textDecoration: "none",
                              width: "100%",
                              color: "#E5E7EB",
                            }}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View this reel on Instagram
                          </a>
                        </div>
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export default Instagram;

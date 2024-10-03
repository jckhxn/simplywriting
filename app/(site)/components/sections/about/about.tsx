import React from "react";

interface AboutSectionProps {
  showAwardsAndMilestones?: boolean;
}

export default function AboutSection({
  showAwardsAndMilestones = true,
}: AboutSectionProps) {
  return (
    <section className="py-12 lg:py-16 bg-blue-50">
      <div className="max-w-xxl mx-auto px-6 space-y-12">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-medium text-green-600">About Me</h2>
            <div className="flex-grow h-px bg-green-600"></div>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-center">
            I Will Help You Win Pitches
            <br />
            with Words & Concept
          </h1>

          <div className="grid md:grid-cols-2 gap-8 text-gray-600">
            <p>
              Neque felis cras nunc magna turpis tincidunt enim facilisi orci
              sed id est mauris felis parturient accumsan sapien nunc nibh
              dignissim neque nec, molestie vel magna at et urna vulputate ut
              etiam in mattis est egestas penatibus vitae maecenas interdum sed
              arcu donec risus vestibulum aliquet auctor quam.
            </p>
            <p>
              Lectus leo neque accumsan condimentum dictum eu, in sem mauris
              turpis orci maecenas sed tellus lacus porta fermentum nulla quis
              sagittis, cursus gravida arcu aliquam magna morbi aenean nunc
              ornare sed ac mauris dolor amet, vestibulum amet non adipiscing
              amet.
            </p>
          </div>
        </div>
        {showAwardsAndMilestones && (
          <>
            <hr className="border-gray-200" />

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Milestone</h2>
                <ul className="space-y-2 text-left">
                  <li>
                    <span className="font-semibold">2019</span> - Netus viverra
                    pellentesque ornare sit
                  </li>
                  <li>
                    <span className="font-semibold">2016</span> - Faucibus
                    volutpat imperdiet in
                  </li>
                  <li>
                    <span className="font-semibold">2015</span> - Vitae
                    dignissim maecenas vitae
                  </li>
                  <li>
                    <span className="font-semibold">2013</span> - Diam tristique
                    rhoncus eu
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Awards</h2>
                <ul className="space-y-2 text-left">
                  <li>
                    <span className="font-semibold">2020</span> - Curabitur urna
                    faucibus volutpat facilisis
                  </li>
                  <li>
                    <span className="font-semibold">2016</span> - Laoreet
                    egestas aenean congue convallis
                  </li>
                  <li>
                    <span className="font-semibold">2015</span> - Scelerisque
                    egestas tellus mi pulvinar
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

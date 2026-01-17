import { Shield, User, Target, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Shield className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About LearningKnights</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A Learning Product from RubiRoyals
          </p>
        </div>

        <div className="space-y-8">
          {/* Mission */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    LearningKnights is a student-first learning platform designed to help students
                    and young professionals develop essential skills in communication, entrepreneurship,
                    technology, and finance. We believe that learning should be engaging, self-paced,
                    and story-driven—transforming education into an exciting quest for knowledge.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Story */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    LearningKnights was founded by Yogeshwaran, an engineering student passionate
                    about building tools that help peers grow. Recognizing the need for accessible,
                    engaging, and practical learning resources, Yogeshwaran created LearningKnights
                    to bridge the gap between traditional education and real-world skills.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The platform combines modern technology with a gamified learning experience,
                    where each learner becomes a &quot;Knight of Knowledge&quot;—progressing through
                    levels, earning badges, and unlocking rewards as they master new topics.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Founder */}
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <User className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Founder</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    <strong>Yogeshwaran</strong>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    An engineering student with a vision to make quality education accessible to all.
                    Through LearningKnights, Yogeshwaran aims to empower students to develop
                    communication skills, business acumen, and technical expertise through
                    self-paced, interactive learning.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Company */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">About RubiRoyals</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                LearningKnights is a product of <strong>Rubi Technologies (RubiRoyals)</strong>,
                a company dedicated to creating innovative educational solutions. RubiRoyals focuses
                on developing platforms and tools that make learning accessible, engaging, and
                effective for students and professionals worldwide.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


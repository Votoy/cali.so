import {
  EmailCard,
  GitHubCard,
  type GitHubSnapshot,
  type SocialSnapshot,
} from '~/components/social-cards'
import { T } from '~/lib/i18n'

function HomeContact({
  github,
}: {
  social: SocialSnapshot
  github: GitHubSnapshot
}) {
  return (
    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
      <T
        zh={
          <>
            可以在 <GitHubCard data={github} triggerClassName="home-contact-link" />{' '}
            找到我，也可以发邮件到{' '}
            <EmailCard
              address="li_mengfan@foxmail.com"
              trigger="li_mengfan@foxmail.com"
              triggerClassName="home-contact-link"
            />
            。
          </>
        }
        en={
          <>
            Find me on <GitHubCard data={github} triggerClassName="home-contact-link" /> or email{' '}
            <EmailCard
              address="li_mengfan@foxmail.com"
              trigger="li_mengfan@foxmail.com"
              triggerClassName="home-contact-link"
            />
            .
          </>
        }
      />
    </p>
  )
}

export function HomeIntroduction({
  social,
  github,
}: {
  social: SocialSnapshot
  github: GitHubSnapshot
}) {
  return (
    <div className="home-introduction">
      <p className="text-sm leading-relaxed text-muted-foreground">
        <T
          zh="我是 Marvin，定居成都，ENTJ。我喜欢把想法做成东西。这里放我做过的项目、拍过的照片，以及值得留下来的东西。"
          en="I'm Marvin, based in Chengdu, ENTJ. I like turning ideas into things. This site holds projects I've made, photos I've taken, and things worth keeping."
        />
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        <T
          zh="兴趣主要在 AI、摄影和各种项目上。Li Mn V 其实是三种化学元素。"
          en="I'm mostly into AI, photography, and projects. Li Mn V is actually three chemical elements."
        />
      </p>
      <HomeContact social={social} github={github} />
    </div>
  )
}

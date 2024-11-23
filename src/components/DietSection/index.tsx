import { FormatDate } from 'src/util/FormatDate';
import { SectionContainer, SectionTitle } from './styles';

type DietSectionProps = {
  title: string;
};
export function DietSection({ title }: DietSectionProps) {
  const titleFormated = FormatDate.formatFullDate(title);

  return (
    <SectionContainer>
      <SectionTitle>{titleFormated}</SectionTitle>
    </SectionContainer>
  );
}

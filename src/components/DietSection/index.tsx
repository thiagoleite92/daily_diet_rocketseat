import { FormatDate } from 'src/util/FormatDate';
import { SectionContainer, SectionTitle } from './styles';

type DietSectionProps = {
  title: string;
};
export function DietSection({ title }: DietSectionProps) {
  return (
    <SectionContainer>
      <SectionTitle>{FormatDate.getFullDate(title)}</SectionTitle>
    </SectionContainer>
  );
}

import { render, screen, fireEvent } from '@testing-library/react';
import CertificatesSection from './certificates-section';
import { vi } from 'vitest';
import { useQuery } from '@apollo/client';

vi.mock('@apollo/client', () => {
  return {
    useQuery: vi.fn(),
    gql: (strings: TemplateStringsArray) => strings[0],
  };
});

const mockCertificates = [
  {
    title: 'React Basics',
    desc: '',
    tags: ['frontend'],
    skills: [],
    link: 'https://example.com/react',
  },
  {
    title: 'Node Mastery',
    desc: '',
    tags: ['backend'],
    skills: [],
    link: 'https://example.com/node',
  },
];

// Mock implementation that filters certificates based on variables
(useQuery as unknown as vi.Mock).mockImplementation(
  (
    _query: unknown,
    options?: { variables?: { search?: string; tag?: string } }
  ) => {
    const search = options?.variables?.search;
    const tag = options?.variables?.tag;
    const filtered = mockCertificates.filter(
      (c) =>
        (!search || c.title.toLowerCase().includes(search.toLowerCase())) &&
        (!tag || c.tags.includes(tag))
    );
    return { data: { certificates: filtered }, loading: false };
  }
);

describe('CertificatesSection', () => {
  it('filters certificates by search and tag', async () => {
    render(<CertificatesSection />);

    expect(await screen.findAllByRole('listitem')).toHaveLength(2);

    const searchInput = screen.getByLabelText(/search certificates/i);
    fireEvent.change(searchInput, { target: { value: 'React' } });
    expect(await screen.findAllByRole('listitem')).toHaveLength(1);
    expect(screen.getByText('React Basics')).toBeInTheDocument();

    // clear search
    fireEvent.change(searchInput, { target: { value: '' } });

    const tagTrigger = screen.getByLabelText(/filter by tag/i);
    fireEvent.mouseDown(tagTrigger);
    const backendOption = await screen.findByText('backend');
    fireEvent.click(backendOption);

    expect(await screen.findAllByRole('listitem')).toHaveLength(1);
    expect(screen.getByText('Node Mastery')).toBeInTheDocument();
  });
});

import { createMDXSource } from '@fumadocs/content-collections';
import { allCourses, allMetas } from 'content-collections';
import { loader } from 'fumadocs-core/source';

export const { getPage, getPages, pageTree, getLanguages } = loader({
  baseUrl: '/courses',
  source: createMDXSource(allCourses, allMetas),
});
